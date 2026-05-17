import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')
django.setup()

from django.contrib.auth.models import User

users = User.objects.all()
if not users:
    print("NO_USERS")
else:
    for user in users:
        print(f"User: {user.username}, Superuser: {user.is_superuser}")
