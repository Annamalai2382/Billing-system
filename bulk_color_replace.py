import os
import re

root_dir = r"c:\Users\annam\OneDrive\Desktop\Billing system\templates"

replacements = {
    'from-neon-green to-teal-500': 'from-red-600 to-red-800',
    'from-neon-green to-teal-400': 'from-red-600 to-red-800',
    'text-neon-green': 'text-red-400',
    'focus:border-neon-green': 'focus:border-red-500',
    'hover:text-neon-green': 'hover:text-red-400',
    'text-blue-400': 'text-red-400',
    'bg-blue-500/20': 'bg-red-500/20',
    'from-blue-500 to-indigo-500': 'from-red-600 to-orange-600',
    'hover:text-blue-300': 'hover:text-red-300',
    'focus:border-blue-400': 'focus:border-red-500',
    'text-gray-900': 'text-white' # button texts when changed from light to red need to be white
}

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            file_path = os.path.join(dirpath, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            orig_content = content
            for target, replacement in replacements.items():
                content = content.replace(target, replacement)
            
            if content != orig_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file_path}")

print("Replacements completed.")
