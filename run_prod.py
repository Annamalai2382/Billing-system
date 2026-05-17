import os
import django
from waitress import serve

if __name__ == "__main__":
    print("="*50)
    print(">>> RETAIL BILLING - ENTERPRISE SCALE SERVER <<<")
    print("Waitress WSGI Server: Capable of 1000+ concurrent loads.")
    
    # 1. Setup Django and run database migrations automatically
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')
    django.setup()
    
    print("Running database migrations...")
    from django.core.management import call_command
    call_command('migrate', no_input=True)
    
    # 2. Automatically create default Business and Admin User if none exists
    from django.contrib.auth.models import User
    from core.models import Business, UserProfile
    
    if not User.objects.filter(is_superuser=True).exists():
        print("No superuser found in database. Initializing default cloud admin account...")
        
        # Create default Business
        biz, created = Business.objects.get_or_create(
            name="Zenelait Infotech",
            defaults={
                'owner_name': 'Annamalai',
                'address': 'Chennai, Tamil Nadu',
                'phone': '9884264816',
                'is_subscription_active': True
            }
        )
        
        # Create superuser admin account
        user = User.objects.create_superuser(
            username='admin',
            email='admin@zenelait.com',
            password='adminpassword123'
        )
        
        # Associate user with business
        profile = user.profile
        profile.role = 'SUPER_ADMIN'
        profile.business = biz
        profile.save()
        
        print("="*50)
        print("  [SUCCESS] DEFAULT ADMIN LOGIN CREATED SUCCESSFULLY!")
        print("  Username: admin")
        print("  Password: adminpassword123")
        print("="*50)
    else:
        print("Superuser accounts already exist. Skipping account creation.")

    from retail_billing.wsgi import application
    
    # Read port from cloud environment, default to 8000
    port = int(os.environ.get('PORT', 8000))
    print(f"Running on http://0.0.0.0:{port}")
    print("Press Ctrl+C to stop.")
    print("="*50)
    
    # Configuration suitable for heavy concurrency (threads=100+)
    serve(application, host='0.0.0.0', port=port, threads=120, connection_limit=1000)
