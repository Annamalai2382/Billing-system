import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')
django.setup()

from django.contrib.auth.models import User

username = 'demo_user'
password = 'demo_password'

try:
    user = User.objects.get(username=username)
    user.set_password(password)
    user.save()
    print(f"Password for {username} updated.")
except User.DoesNotExist:
    User.objects.create_superuser(username, 'admin@example.com', password)
    print(f"Superuser {username} created.")
