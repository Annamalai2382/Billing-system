import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')
django.setup()

from django.contrib.auth.models import User
from core.models import UserProfile

def update_existing_profiles():
    print("Initializing Role Profiles...")
    for user in User.objects.all():
        profile, created = UserProfile.objects.get_or_create(
            user=user,
            defaults={'role': 'SUPER_ADMIN' if user.is_superuser else 'CASHIER'}
        )
        
        # If user is a superuser, ensure their role is SUPER_ADMIN
        if user.is_superuser and profile.role != 'SUPER_ADMIN':
            profile.role = 'SUPER_ADMIN'
            profile.save()
            print(f"Updated User '{user.username}' to SUPER_ADMIN.")
            
    print("Role profiles check complete. You are ready!")

if __name__ == "__main__":
    update_existing_profiles()
