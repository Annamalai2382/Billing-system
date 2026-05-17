from django.contrib.auth.forms import AuthenticationForm
from django import forms

class CustomAuthenticationForm(AuthenticationForm):
    def confirm_login_allowed(self, user):
        # Call the parent's check (which checks is_active)
        super().confirm_login_allowed(user)
        
        # Super Admins bypass this check
        if hasattr(user, 'profile') and user.profile.role == 'SUPER_ADMIN':
            return
            
        # Check if the user's business is active
        if hasattr(user, 'profile') and user.profile.business:
            if not user.profile.business.is_subscription_active:
                raise forms.ValidationError(
                    f"Access Denied: The subscription for '{user.profile.business.name}' is currently inactive. Please contact system administration.",
                    code='inactive_business',
                )
