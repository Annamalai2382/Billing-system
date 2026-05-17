from django.shortcuts import redirect
from django.contrib import messages
from django.urls import reverse

class BusinessStatusMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            # Skip check for Super Admins explicitly
            if hasattr(request.user, 'profile') and request.user.profile.role == 'SUPER_ADMIN':
                return self.get_response(request)
            
            # Check if user has a profile and business
            if hasattr(request.user, 'profile') and request.user.profile.business:
                business = request.user.profile.business
                if not business.is_subscription_active:
                    # Allow access to logout and login only
                    allowed_paths = [reverse('logout'), '/accounts/logout/', reverse('login'), '/accounts/login/']
                    if request.path not in allowed_paths and not request.path.startswith('/admin/'):
                        messages.error(request, f"Access Denied: The subscription for '{business.name}' is currently inactive. Please contact system administration.")
                        # Logout the user to prevent them from staying logged in but blocked
                        from django.contrib.auth import logout
                        logout(request)
                        return redirect('login')
        
        return self.get_response(request)
