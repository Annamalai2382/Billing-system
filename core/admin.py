from django.contrib import admin
from .models import Business, UserProfile

@admin.register(Business)
class BusinessAdmin(admin.ModelAdmin):
    list_display = ('name', 'owner_name', 'phone', 'email', 'festival_offer_enabled', 'is_subscription_active')
    list_filter = ('festival_offer_enabled', 'is_subscription_active')
    search_fields = ('name', 'owner_name')

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'role', 'business')
    list_filter = ('role', 'business')
