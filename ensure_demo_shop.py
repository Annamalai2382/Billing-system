import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')
django.setup()

from django.contrib.auth.models import User
from core.models import Business, UserProfile

def setup_demo():
    print("Ensuring Demo Shop and Shop Admin exist...")
    
    # 1. Create Business
    business, created = Business.objects.get_or_create(
        name="Apex Electronics",
        defaults={
            'owner_name': "Admin Owner",
            'phone': "9876543210",
            'email': "admin@apex.com",
            'gstin': "22AAAAA0000A1Z5",
            'is_subscription_active': True
        }
    )
    if created:
        print("Created Business 'Apex Electronics'.")
    else:
        print("Business 'Apex Electronics' already exists.")
        
    # 2. Create Admin User
    username = "admin"
    password = "admin@123"
    
    if not User.objects.filter(username=username).exists():
        user = User.objects.create_user(username=username, password=password, email="admin@apex.com")
        print(f"Created User '{username}'.")
    else:
        user = User.objects.get(username=username)
        user.set_password(password)
        user.save()
        print(f"User '{username}' already existed, reset password to {password}.")

    # 3. Create UserProfile
    profile, p_created = UserProfile.objects.get_or_create(
        user=user,
        defaults={
            'role': 'ADMIN',
            'business': business
        }
    )
    if not p_created:
        profile.role = 'ADMIN'
        profile.business = business
        profile.save()
        print(f"Updated profile for '{username}' with role ADMIN and business link.")
    else:
        print(f"Created profile for '{username}' with role ADMIN and business link.")
        
    print("Done!")

if __name__ == "__main__":
    setup_demo()
