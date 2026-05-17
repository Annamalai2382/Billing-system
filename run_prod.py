import os
from waitress import serve
from retail_billing.wsgi import application

if __name__ == "__main__":
    print("="*50)
    print(">>> RETAIL BILLING - ENTERPRISE SCALE SERVER <<<")
    print("Waitress WSGI Server: Capable of 1000+ concurrent loads.")
    # Read port from cloud environment, default to 8000
    port = int(os.environ.get('PORT', 8000))
    print(f"Running on http://0.0.0.0:{port}")
    print("Press Ctrl+C to stop.")
    print("="*50)
    
    # Configuration suitable for heavy concurrency (threads=100+)
    serve(application, host='0.0.0.0', port=port, threads=120, connection_limit=1000)
