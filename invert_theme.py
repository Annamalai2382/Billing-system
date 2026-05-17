import os

root_dir = r"c:\Users\annam\OneDrive\Desktop\Billing system\templates"

replacements = {
    # Body theme
    'bg-gradient-to-br from-red-950 to-zinc-950 min-h-screen text-white': 'bg-red-50 min-h-screen text-slate-900',
    
    # Specific container elements where white text was hardcoded
    'text-white font-bold': 'text-slate-900 font-bold',
    'text-white font-medium': 'text-slate-900 font-medium',
    'text-white font-semibold': 'text-slate-900 font-semibold',
    
    # General Opacity text mappings
    'text-white/80': 'text-slate-700',
    'text-white/70': 'text-slate-600',
    'text-white/50': 'text-slate-500',
    'text-white/30': 'text-slate-400',
    
    # Transparent Background mappings for inputs and smaller blocks
    'bg-white/5': 'bg-slate-50',
    'bg-white/10': 'bg-slate-100',
    'bg-white/20': 'bg-slate-200',
    'bg-black/30': 'bg-slate-100',
    'bg-black/60': 'bg-black/30', # For modals, lessen backdrop opacity
    
    # Hover states
    'hover:bg-white/5': 'hover:bg-red-50',
    'hover:bg-white/10': 'hover:bg-red-100',
    'hover:bg-white/20': 'hover:bg-red-100',
    'hover:text-white': 'hover:text-slate-900',
    
    # Border mappings
    'border-white/5': 'border-slate-100',
    'border-white/10': 'border-slate-200',
    'border-white/20': 'border-slate-200',
    
    # Specific icons and fonts which were set to white explicitly
    'text-white mr-4': 'text-slate-800 mr-4',
    'text-white hover:text-red-400': 'text-slate-700 hover:text-red-600',
    'text-white hover:scale-105': 'text-slate-800 hover:scale-105',
    
    # Table headers which were explicitly white/50
    'text-white/50 text-sm': 'text-slate-500 text-sm',
    
    # Inputs
    'text-white focus:outline-none': 'text-slate-900 focus:outline-none',
    
    # Navigation icons and buttons that needed high contrast white
    'fas fa-times text-white': 'fas fa-times text-slate-700',
    'fas fa-bars text-white': 'fas fa-bars text-slate-800',
    
    # Fix chart grid lines to look nice on light bg instead of dark
    "'rgba(255,255,255,0.05)'": "'rgba(0,0,0,0.05)'",
    "'rgba(255,255,255,0.6)'": "'rgba(0,0,0,0.6)'",
}

# Additional direct simple string cleanup
simple_replacements = {
    'text-white': 'text-slate-900', # Final sweep for general text-white occurrences
}

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.html'):
            file_path = os.path.join(dirpath, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            orig_content = content
            
            # Do precise ones first
            for target, replacement in replacements.items():
                content = content.replace(target, replacement)
            
            # Base theme change (if base missed specific body replacement)
            content = content.replace('text-white font-poppins', 'text-slate-900 font-poppins')
            
            if content != orig_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Switched colors in {file_path}")

print("Phase 1 Complete: Template transformations finished.")
