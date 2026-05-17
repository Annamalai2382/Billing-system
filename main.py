import os
from firebase_functions import https_fn
from werkzeug.wrappers import Response

# 1. Set configuration environment before importing WSGI app
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'retail_billing.settings')

# 2. Import the production Django WSGI Application
from retail_billing.wsgi import application

# 3. Expose the entry point for Firebase Cloud Functions
@https_fn.on_request()
def django_app(request: https_fn.Request) -> https_fn.Response:
    """
    Wraps the standard Django WSGI application inside the 
    Google Cloud Functions Python runtime handler using Werkzeug adapter.
    """
    # Map raw WSGI response to Functions response automatically
    return Response.from_app(application, request.environ)
