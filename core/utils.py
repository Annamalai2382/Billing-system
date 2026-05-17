from django.shortcuts import redirect
from django.contrib import messages

def get_business(request):
    """
    Returns the business of the currently logged-in user.
    If Super Admin, might return None (meaning all access) or a selected business from session.
    """
    if not request.user.is_authenticated:
        return None
        
    if not hasattr(request.user, 'profile'):
        return None
        
    return request.user.profile.business

def filter_by_business(queryset, request):
    """
    Filters a queryset by the user's business.
    If the user is a SUPER_ADMIN, it returns all.
    """
    business = get_business(request)
    if request.user.is_superuser or (hasattr(request.user, 'profile') and request.user.profile.role == 'SUPER_ADMIN'):
        # Check if a specific business is selected via GET/SESSION if needed.
        business_id = request.GET.get('business_id') or request.session.get('view_business_id')
        if business_id:
            return queryset.filter(business_id=business_id)
        return queryset
        
    if business:
        return queryset.filter(business=business)
    else:
        # User has no business assigned, restrict view
        return queryset.none()
