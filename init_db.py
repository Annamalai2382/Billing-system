import pymysql

try:
    connection = pymysql.connect(
        host='localhost',
        user='root',
        password='root'
    )
    print("Connection Success!")
    
    with connection.cursor() as cursor:
        sql = "CREATE DATABASE IF NOT EXISTS retail_billing_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
        cursor.execute(sql)
        print("Database retail_billing_db created or verified.")
    
    connection.close()
except Exception as e:
    print(f"Connection Failure: {e}")
