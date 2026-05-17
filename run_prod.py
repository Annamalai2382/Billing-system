import os
from waitress import serve
from retail_billing.wsgi import application

if __name__ == "__main__":
    print("="*50)
    print(">>> RETAIL BILLING - ENTERPRISE SCALE SERVER <<<")
    print("Waitress WSGI Server: Capable of 1000+ concurrent loads.")
    print("Running on http://127.0.0.1:8000")
    print("Press Ctrl+C to stop.")
    print("="*50)
    
    # Configuration suitable for heavy concurrency (threads=100+)
    serve(application, host='127.0.0.1', port=8000, threads=120, connection_limit=1000)
