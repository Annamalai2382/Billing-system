// Sidebar Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');

    if (openBtn && sidebar) {
        openBtn.addEventListener('click', () => {
            sidebar.classList.remove('-translate-x-full');
        });
    }

    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.add('-translate-x-full');
        });
    }
});

// Notification Bell Click Handler
const notificationBell = document.getElementById('notificationBell');
if (notificationBell) {
    notificationBell.addEventListener('click', () => {
        console.log('Notification bell clicked');
        const badge = notificationBell.querySelector('span');
        const count = badge ? badge.textContent.trim() : '0';
        const plural = count === '1' ? '' : 's';
        showToast(`You have ${count} new notification${plural}`, 'info');
    });
}

// Toast Notification System
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const bgColor = type === 'success' ? 'bg-green-500' : (type === 'error' ? 'bg-red-500' : 'bg-blue-500');
    const icon = type === 'success' ? 'fa-check-circle' : (type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle');

    toast.className = `toast glass-panel ${bgColor} text-white px-4 py-3 rounded-lg shadow-lg flex items-center min-w-[250px]`;
    toast.innerHTML = `
        <i class="fas ${icon} mr-3 text-xl"></i>
        <span class="font-medium">${message}</span>
    `;

    container.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300); // Wait for transition
    }, 3000);
}

// Multi-language Dictionary (English / Tamil)
// Sorted by length descending automatically inside translateDOM
const translations = {
    'EN': {
        // Base / Sidebar / Navbar
        'Zenelait Infotech Billing System': 'Zenelait Infotech Billing System',
        'Zenelait Infotech': 'Zenelait Infotech',
        'Overview': 'Overview',
        'Console': 'Console',
        'Dashboard': 'Dashboard',
        'Billing (POS)': 'Billing (POS)',
        'Catalog': 'Catalog',
        'Offers': 'Offers',
        'Customers': 'Customers',
        'Staff': 'Staff',
        'Ledger': 'Ledger',
        'Analytics': 'Analytics',
        'P&L / Tax': 'P&L / Tax',
        'EN': 'EN',
        'Logout': 'Logout',
        'Good day,': 'Good day,',
        'Admin User': 'Admin User',
        'Staff Management': 'Staff Management',
        'New Staff Onboarding': 'New Staff Onboarding',
        'Super Admin Command Center': 'Super Admin Command Center',
        'Products & Services': 'Products & Services',
        'Tax & Profit Reporter': 'Tax & Profit Reporter',
        'Periodical Analytics': 'Periodical Analytics',
        'Purchase & Sales Tracking': 'Purchase & Sales Tracking',
        'Point of Sale (POS)': 'Point of Sale (POS)',
        'Tax Invoice': 'Tax Invoice',
        'Festival Offer Management': 'Festival Offer Management',
        'Customer Management': 'Customer Management',

        // Login Page
        'Return Home': 'Return Home',
        'Unlock Secure ': 'Unlock Secure ',
        'Console Access.': 'Console Access.',
        'Unlock Secure Console Access.': 'Unlock Secure Console Access.',
        'Seamlessly manage point-of-sale invoicing, complete statutory ledger audit files, and monitor multi-agent performance metrics.': 'Seamlessly manage point-of-sale invoicing, complete statutory ledger audit files, and monitor multi-agent performance metrics.',
        'Operator Sign-In': 'Operator Sign-In',
        'Console Authentication Core v3.0': 'Console Authentication Core v3.0',
        'Access Identity': 'Access Identity',
        'Operator Username': 'Operator Username',
        'Security Key': 'Security Key',
        'Reset Path': 'Reset Path',
        'SSL Encrypted Client-Session Node': 'SSL Encrypted Client-Session Node',
        'Initialize Connection': 'Initialize Connection',

        // POS
        'Search catalog by name...': 'Search catalog by name...',
        'Scan/Type Barcode/SKU...': 'Scan/Type Barcode/SKU...',
        'Open Camera Scan': 'Open Camera Scan',
        'Scan Product Barcode / QR': 'Scan Product Barcode / QR',
        'Add to Cart': 'Add to Cart',
        'Cart is empty': 'Cart is empty',
        'Current Invoice': 'Current Invoice',
        'Clear': 'Clear',
        'Customer Name': 'Customer Name',
        'Phone Number': 'Phone Number',
        'Email': 'Email',
        'GSTIN (B2B Only)': 'GSTIN (B2B Only)',
        'Subtotal:': 'Subtotal:',
        'CGST (Central @ 50%):': 'CGST (Central @ 50%):',
        'SGST (State @ 50%):': 'SGST (State @ 50%):',
        'Total GST Tax:': 'Total GST Tax:',
        'Festival Discount:': 'Festival Discount:',
        'Total Amount:': 'Total Amount:',
        'Send Invoice via WhatsApp': 'Send Invoice via WhatsApp',
        'Cash': 'Cash',
        'UPI/Card': 'UPI/Card',

        // Customer Page & Forms
        'All Customers': 'All Customers',
        'Add Customer': 'Add Customer',
        'Customer Name *': 'Customer Name *',
        'Phone Number': 'Phone Number',
        'GSTIN (Tax ID)': 'GSTIN (Tax ID)',
        'Email Address': 'Email Address',
        'Save Customer': 'Save Customer',
        'Delete Customer': 'Delete Customer',
        'Are you sure you want to delete': 'Are you sure you want to delete',
        'This operation is permanent.': 'This operation is permanent.',
        'Cancel': 'Cancel',
        'Delete': 'Delete',
        'Edit': 'Edit',

        // Inventory / Catalog Page
        'Search items...': 'Search items...',
        'Export': 'Export',
        'Add Item': 'Add Item',
        'Item Type': 'Item Type',
        'Name / Description': 'Name / Description',
        'Price (₹)': 'Price (₹)',
        'HSN/SAC Code': 'HSN/SAC Code',
        'GST Rate (%)': 'GST Rate (%)',
        'Initial Stock': 'Initial Stock',
        'Product Image (Optional)': 'Product Image (Optional)',
        'Save Item': 'Save Item',
        'Edit Product / Service': 'Edit Product / Service',
        'Update Item Details': 'Update Item Details',
        'Delete Confirmation': 'Delete Confirmation',
        'Are you absolutely sure you want to delete': 'Are you absolutely sure you want to delete',
        'This operation cannot be undone.': 'This operation cannot be undone.',
        'Confirm Delete': 'Confirm Delete',
        'Physical Product': 'Physical Product',
        'Service / Labor': 'Service / Labor',
        'Service': 'Service',
        'Product': 'Product',
        'In Stock': 'In Stock',
        'Low Stock': 'Low Stock',
        'Out of Stock': 'Out of Stock',
        'Active': 'Active',
        'Inactive': 'Inactive',
        'Type': 'Type',
        'HSN/SAC': 'HSN/SAC',
        'Price': 'Price',
        'Stock': 'Stock',
        'Status': 'Status',
        'Actions': 'Actions',

        // Dashboard
        'Live System Operational': 'Live System Operational',
        'Here is a quick breakdown of your business performance for': 'Here is a quick breakdown of your business performance for',
        'today': 'today',
        'vs yesterday': 'vs yesterday',
        'Total Sales Today': 'Total Sales Today',
        'Today\'s Revenue': 'Today\'s Revenue',
        'Festival Offer Mode': 'Festival Offer Mode',
        'Enabled': 'Enabled',
        'Disabled': 'Disabled',
        'Active Festival Offers': 'Active Festival Offers',
        'Valid until:': 'Valid until:',
        'No active festival offers found.': 'No active festival offers found.',
        'Create one in the Admin Panel.': 'Create one in the Admin Panel.',
        'Revenue Overview': 'Revenue Overview',

        // Ledger / Reports Page
        'Total Sales Revenue': 'Total Sales Revenue',
        'Income Stream': 'Income Stream',
        'Total Procurement': 'Total Procurement',
        'Capital Outflow': 'Capital Outflow',
        'Operational Balance': 'Operational Balance',
        'Net Margins': 'Net Margins',
        'Sales Ledger': 'Sales Ledger',
        'Purchase Ledger': 'Purchase Ledger',
        'GST Report': 'GST Report',
        'Add Purchase': 'Add Purchase',
        'Export PDF': 'Export PDF',
        'Outbound Customer Invoices': 'Outbound Customer Invoices',
        'Invoice ID': 'Invoice ID',
        'Date': 'Date',
        'Payment Mode': 'Payment Mode',
        'Invoice Total': 'Invoice Total',
        'Inbound Vendor Procurement': 'Inbound Vendor Procurement',
        'Reference': 'Reference',
        'Supplier / Vendor': 'Supplier / Vendor',
        'Bill Reference': 'Bill Reference',
        'Procured Items': 'Procured Items',
        'Total Cost': 'Total Cost',
        'Collections Summary': 'Collections Summary',
        'Total Net Sales (Taxable)': 'Total Net Sales (Taxable)',
        'CGST Collected': 'CGST Collected',
        'SGST Collected': 'SGST Collected',
        'Total Tax Payable': 'Total Tax Payable',
        'Live Tax Slab Breakdown': 'Live Tax Slab Breakdown',
        'Tax Slab Rate': 'Tax Slab Rate',
        'Taxable Net Value': 'Taxable Net Value',
        'Combined Tax': 'Combined Tax',
        'Detailed GSTR-1 Invoice Matrix': 'Detailed GSTR-1 Invoice Matrix',
        'Reference ID': 'Reference ID',
        'Billing Date': 'Billing Date',
        'Purchaser / GSTIN': 'Purchaser / GSTIN',
        'Gross Amount': 'Gross Amount',
        'Add Purchase Invoice': 'Add Purchase Invoice',
        'Record stock procurement and automatically increment inventory counts.': 'Record stock procurement and automatically increment inventory counts.',
        'Supplier Vendor': 'Supplier Vendor',
        'Bill Reference #': 'Bill Reference #',
        'Procurement Mode': 'Procurement Mode',
        'Procured Product': 'Procured Product',
        'Unit Cost (₹)': 'Unit Cost (₹)',
        'Quantity': 'Quantity',
        'Gross Outflow Total': 'Gross Outflow Total',
        'Post Procurement Invoice': 'Post Procurement Invoice',

        // Periodical Analytics Page
        'Monthly Sales': 'Monthly Sales',
        'Quarterly Sales': 'Quarterly Sales',
        'Yearly Sales': 'Yearly Sales',
        'Print PDF Report': 'Print PDF Report',
        'Monthly Revenue Velocity': 'Monthly Revenue Velocity',
        'Period-over-period gross billing performance': 'Period-over-period gross billing performance',
        'Historical Monthly Aggregates': 'Historical Monthly Aggregates',
        'Billing Period': 'Billing Period',
        'Invoice Volumes': 'Invoice Volumes',
        'Average Order Size (AOV)': 'Average Order Size (AOV)',
        'Total Value Collected': 'Total Value Collected',
        'Historical Quarterly Aggregates': 'Historical Quarterly Aggregates',
        'Historical Annual Aggregates': 'Historical Annual Aggregates',
        'Billing Year': 'Billing Year',

        // Tax & Profit Reporter Page
        'Gross Revenue': 'Gross Revenue',
        'Turnover Pool': 'Turnover Pool',
        'Operating Cost': 'Operating Cost',
        'GST Collected': 'GST Collected',
        'Outward Liability': 'Outward Liability',
        'Net Profit Margin': 'Net Profit Margin',
        'Net Retained Margin': 'Net Retained Margin',
        'Revenue vs Operating Cost Velocity': 'Revenue vs Operating Cost Velocity',
        'Historical comparative cashflow trend matrix': 'Historical comparative cashflow trend matrix',
        'Sales': 'Sales',
        'Cost': 'Cost',
        'Comprehensive Periodic Profit & Tax Grid': 'Comprehensive Periodic Profit & Tax Grid',
        'Print': 'Print',
        'Fiscal Month': 'Fiscal Month',
        'Gross Sales (Turnover)': 'Gross Sales (Turnover)',
        'Outward Tax (GST)': 'Outward Tax (GST)',
        'Operating Expenses': 'Operating Expenses',
        'Retained Net Profit': 'Retained Net Profit',
        'Profit Margin %': 'Profit Margin %',

        // Festival Offers Page
        'Global Festival Offer Mode': 'Global Festival Offer Mode',
        'When enabled, active offers will be automatically applied at the POS.': 'When enabled, active offers will be automatically applied at the POS.',
        'MODE ACTIVE': 'MODE ACTIVE',
        'MODE INACTIVE': 'MODE INACTIVE',
        'Available Offers': 'Available Offers',
        'Create New Offer': 'Create New Offer',
        'All Products': 'All Products',
        'Active Now': 'Active Now',
        'Scheduled / Expired': 'Scheduled / Expired',

        // Roles and general descriptions
        'Super Admin': 'Super Admin',
        'Admin': 'Admin',
        'Cashier': 'Cashier',
        'Manager': 'Manager',

        // Months (Full and short)
        'January': 'January', 'February': 'February', 'March': 'March', 'April': 'April',
        'May': 'May', 'June': 'June', 'July': 'July', 'August': 'August',
        'September': 'September', 'October': 'October', 'November': 'November', 'December': 'December',
        'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'Jun': 'Jun', 'Jul': 'Jul', 'Aug': 'Aug', 'Sep': 'Sep', 'Oct': 'Oct', 'Nov': 'Nov', 'Dec': 'Dec'
    },
    'TA': {
        // Base / Sidebar / Navbar
        'Zenelait Infotech Billing System': 'ஜெனிலைட் இன்ஃபோடெக் பில்லிங் முறைமை',
        'Zenelait Infotech': 'ஜெனிலைட் இன்ஃபோடெக்',
        'Overview': 'மேலோட்டம்',
        'Console': 'கண்ட்ரோல் பேனல்',
        'Dashboard': 'முகப்பு பலகை',
        'Billing (POS)': 'பில்லிங் (POS)',
        'Catalog': 'இருப்புப் பட்டியல்',
        'Offers': 'சலுகைகள்',
        'Customers': 'வாடிக்கையாளர்கள்',
        'Staff': 'பணியாளர்கள்',
        'Ledger': 'கணக்குப்பேடு',
        'Analytics': 'பகுப்பாய்வு',
        'P&L / Tax': 'இலாப நட்ட / வரி',
        'EN': 'TA',
        'Logout': 'வெளியேறு',
        'Good day,': 'இனிய நாள்,',
        'Admin User': 'நிர்வாக பயனர்',
        'Staff Management': 'பணியாளர் மேலாண்மை',
        'New Staff Onboarding': 'புதிய பணியாளர் சேர்க்கை',
        'Super Admin Command Center': 'தலைமை நிர்வாக கட்டளை மையம்',
        'Products & Services': 'தயாரிப்புகள் மற்றும் சேவைகள்',
        'Tax & Profit Reporter': 'வரி மற்றும் லாப அறிக்கை',
        'Periodical Analytics': 'காலமுறை பகுப்பாய்வு',
        'Purchase & Sales Tracking': 'கொள்முதல் மற்றும் விற்பனை கண்காணிப்பு',
        'Point of Sale (POS)': 'விற்பனை புள்ளி (POS)',
        'Tax Invoice': 'வரி விலைப்பட்டியல்',
        'Festival Offer Management': 'திருவிழா சலுகை மேலாண்மை',
        'Customer Management': 'வாடிக்கையாளர் மேலாண்மை',

        // Login Page
        'Return Home': 'முகப்புக்குத் திரும்பு',
        'Unlock Secure ': 'பாதுகாப்பான ',
        'Console Access.': 'கன்சோல் அணுகல்.',
        'Unlock Secure Console Access.': 'பாதுகாப்பான கன்சோல் அணுகலைத் திறக்கவும்.',
        'Seamlessly manage point-of-sale invoicing, complete statutory ledger audit files, and monitor multi-agent performance metrics.': 'பாயிண்ட்-ஆஃப்-சேல் இன்வாய்சிங், சட்டப்பூர்வ கணக்குத் தணிக்கை கோப்புகள் மற்றும் பல முகவர் செயல்திறன் அளவீடுகளை தடையின்றி நிர்வகிக்கவும்.',
        'Operator Sign-In': 'ஆபரேட்டர் உள்நுறைவு',
        'Console Authentication Core v3.0': 'கன்சோல் அங்கீகார கோர் v3.0',
        'Access Identity': 'அணுகல் அடையாளம்',
        'Operator Username': 'ஆபரேட்டர் பயனர் பெயர்',
        'Security Key': 'பாதுகாப்பு சாவி',
        'Reset Path': 'மீட்டமைத்தல் பாதை',
        'SSL Encrypted Client-Session Node': 'SSL குறியாக்கப்பட்ட கிளையன்ட்-அமர்வு முனை',
        'Initialize Connection': 'இணைப்பைத் தொடங்கு',

        // POS
        'Search catalog by name...': 'பெயர் மூலம் இருப்புப் பட்டியலைத் தேடு...',
        'Scan/Type Barcode/SKU...': 'பார்கோடு அல்லது SKU-ஐ ஸ்கேன் செய்யவும்/உள்ளிடவும்...',
        'Open Camera Scan': 'கேமரா ஸ்கேனைத் திற',
        'Scan Product Barcode / QR': 'பொருள் பார்கோடு / QR-ஐ ஸ்கேன் செய்யவும்',
        'Add to Cart': 'கூடையில் சேர்',
        'Cart is empty': 'கூடை காலியாக உள்ளது',
        'Current Invoice': 'தற்போதைய விலைப்பட்டியல்',
        'Clear': 'நீக்கு',
        'Customer Name': 'வாடிக்கையாளர் பெயர்',
        'Phone Number': 'தொலைபேசி எண்',
        'Email': 'மின்னஞ்சல்',
        'GSTIN (B2B Only)': 'GSTIN எண் (B2B மட்டும்)',
        'Subtotal:': 'துணைத்தொகை:',
        'CGST (Central @ 50%):': 'CGST (மத்திய @ 50%):',
        'SGST (State @ 50%):': 'SGST (மாநில @ 50%):',
        'Total GST Tax:': 'மொத்த GST வரி:',
        'Festival Discount:': 'திருவிழா தள்ளுபடி:',
        'Total Amount:': 'மொத்த தொகை:',
        'Send Invoice via WhatsApp': 'WhatsApp மூலம் விலைப்பட்டியலை அனுப்புக',
        'Cash': 'ரொக்கம்',
        'UPI/Card': 'UPI / அட்டை',

        // Customer Page & Forms
        'All Customers': 'அனைத்து வாடிக்கையாளர்கள்',
        'Add Customer': 'வாடிக்கையாளரைச் சேர்',
        'Customer Name *': 'வாடிக்கையாளர் பெயர் *',
        'Phone Number': 'தொலைபேசி எண்',
        'GSTIN (Tax ID)': 'GSTIN (வரி ஐடி)',
        'Email Address': 'மின்னஞ்சல் முகவரி',
        'Save Customer': 'வாடிக்கையாளரைச் சேமி',
        'Delete Customer': 'வாடிக்கையாளரை நீக்கு',
        'Are you sure you want to delete': 'நீங்கள் நிச்சயமாக நீக்க விரும்புகிறீர்களா',
        'This operation is permanent.': 'இந்த நடவடிக்கை நிரந்தரமானது.',
        'Cancel': 'ரத்துசெய்',
        'Delete': 'நீக்கு',
        'Edit': 'திருத்து',

        // Inventory / Catalog Page
        'Search items...': 'பொருட்களைத் தேடு...',
        'Export': 'ஏற்றுமதி',
        'Add Item': 'பொருளைச் சேர்',
        'Item Type': 'பொருளின் வகை',
        'Name / Description': 'பெயர் / விளக்கம்',
        'Price (₹)': 'விலை (₹)',
        'HSN/SAC Code': 'HSN/SAC குறியீடு',
        'GST Rate (%)': 'GST வரி விகிதம் (%)',
        'Initial Stock': 'ஆரம்ப இருப்பு',
        'Product Image (Optional)': 'தயாரிப்பு படம் (விருப்பத்தேர்வு)',
        'Save Item': 'பொருளைச் சேமி',
        'Edit Product / Service': 'தயாரிப்பு / சேவையைத் திருத்து',
        'Update Item Details': 'பொருள் விவரங்களைப் புதுப்பி',
        'Delete Confirmation': 'நீக்குதல் உறுதிப்படுத்தல்',
        'Are you absolutely sure you want to delete': 'நீங்கள் நிச்சயமாக நீக்க விரும்புகிறீர்களா',
        'This operation cannot be undone.': 'இந்தச் செயல்பாட்டை மாற்ற முடியாது.',
        'Confirm Delete': 'நீக்குதலை உறுதிப்படுத்து',
        'Physical Product': 'உடல் தயாரிப்பு',
        'Service / Labor': 'சேவை / உழைப்பு',
        'Service': 'சேவை',
        'Product': 'தயாரிப்பு',
        'In Stock': 'இருப்பில் உள்ளது',
        'Low Stock': 'குறைந்த இருப்பு',
        'Out of Stock': 'இருப்பில்லை',
        'Active': 'செயலில் உள்ளது',
        'Inactive': 'செயலிழந்தது',
        'Type': 'வகை',
        'HSN/SAC': 'HSN/SAC',
        'Price': 'விலை',
        'Stock': 'இருப்பு',
        'Status': 'நிலை',
        'Actions': 'செயல்கள்',

        // Dashboard
        'Live System Operational': 'நேரடி கணினி செயல்பாட்டில் உள்ளது',
        'Here is a quick breakdown of your business performance for': 'இன்றைய உங்கள் வணிகச் செயல்பாட்டின் விரைவான விவரம் இதோ:',
        'today': 'இன்று',
        'vs yesterday': 'நேற்றைய ஒப்பிடுகையில்',
        'Total Sales Today': 'இன்றைய மொத்த விற்பனை',
        'Today\'s Revenue': 'இன்றைய வருவாய்',
        'Festival Offer Mode': 'திருவிழா சலுகை முறைமை',
        'Enabled': 'செயல்படுத்தப்பட்டது',
        'Disabled': 'செயலிழக்கச் செய்யப்பட்டது',
        'Active Festival Offers': 'செயலில் உள்ள திருவிழா சலுகைகள்',
        'Valid until:': 'வரை செல்லுபடியாகும்:',
        'No active festival offers found.': 'செயலில் உள்ள திருவிழா சலுகைகள் எதுவும் இல்லை.',
        'Create one in the Admin Panel.': 'நிர்வாகக் குழுவில் ஒன்றை உருவாக்கவும்.',
        'Revenue Overview': 'வருவாய் மேலோட்டம்',

        // Ledger / Reports Page
        'Total Sales Revenue': 'மொத்த விற்பனை வருவாய்',
        'Income Stream': 'வருவாய் ஓட்டம்',
        'Total Procurement': 'மொத்த கொள்முதல்',
        'Capital Outflow': 'மூலதன வெளியீடு',
        'Operational Balance': 'செயல்பாட்டு இருப்பு',
        'Net Margins': 'நிகர லாபம்',
        'Sales Ledger': 'விற்பனை பதிவேடு',
        'Purchase Ledger': 'கொள்முதல் பதிவேடு',
        'GST Report': 'GST அறிக்கை',
        'Add Purchase': 'கொள்முதலைச் சேர்',
        'Export PDF': 'PDF ஏற்றுமதி',
        'Outbound Customer Invoices': 'வெளிச்செல்லும் வாடிக்கையாளர் விலைப்பட்டியல்கள்',
        'Invoice ID': 'விலைப்பட்டியல் எண்',
        'Date': 'தேதி',
        'Payment Mode': 'பணம் செலுத்தும் முறை',
        'Invoice Total': 'விலைப்பட்டியல் மொத்தம்',
        'Inbound Vendor Procurement': 'உள்வரும் விற்பனையாளர் கொள்முதல்',
        'Reference': 'குறிப்பு எண்',
        'Supplier / Vendor': 'வழங்குநர் / விற்பனையாளர்',
        'Bill Reference': 'பில் குறிப்பு',
        'Procured Items': 'கொள்முதல் செய்யப்பட்ட பொருட்கள்',
        'Total Cost': 'மொத்த செலவு',
        'Collections Summary': 'வசூல் சுருக்கம்',
        'Total Net Sales (Taxable)': 'மொத்த நிகர விற்பனை (வரிக்குரியது)',
        'CGST Collected': 'CGST வசூலிக்கப்பட்டது',
        'SGST Collected': 'SGST வசூலிக்கப்பட்டது',
        'Total Tax Payable': 'மொத்த செலுத்த வேண்டிய வரி',
        'Live Tax Slab Breakdown': 'நேரடி வரி அடுக்கு விவரம்',
        'Tax Slab Rate': 'வரி அடுக்கு விகிதம்',
        'Taxable Net Value': 'வரிக்குரிய நிகர மதிப்பு',
        'Combined Tax': 'ஒருங்கிணைந்த வரி',
        'Detailed GSTR-1 Invoice Matrix': 'விரிவான GSTR-1 விலைப்பட்டியல் மேட்ரிக்ஸ்',
        'Reference ID': 'குறிப்பு ஐடி',
        'Billing Date': 'பில்லிங் தேதி',
        'Purchaser / GSTIN': 'வாங்குபவர் / GSTIN',
        'Gross Amount': 'மொத்த தொகை',
        'Add Purchase Invoice': 'கொள்முதல் விலைப்பட்டியலைச் சேர்',
        'Record stock procurement and automatically increment inventory counts.': 'இருப்பு கொள்முதலைப் பதிவுசெய்து தானாகவே சரக்கு எண்ணிக்கையை அதிகரிக்கவும்.',
        'Supplier Vendor': 'சப்ளையர் விற்பனையாளர்',
        'Bill Reference #': 'பில் குறிப்பு எண் #',
        'Procurement Mode': 'கொள்முதல் முறை',
        'Procured Product': 'கொள்முதல் செய்யப்பட்ட தயாரிப்பு',
        'Unit Cost (₹)': 'அலகு செலவு (₹)',
        'Quantity': 'அளவு',
        'Gross Outflow Total': 'மொத்த செலவுத் தொகை',
        'Post Procurement Invoice': 'கொள்முதல் விலைப்பட்டியலைச் சமர்ப்பி',

        // Periodical Analytics Page
        'Monthly Sales': 'மாதாந்திர விற்பனை',
        'Quarterly Sales': 'காலாண்டு விற்பனை',
        'Yearly Sales': 'ஆண்டிற்குரிய விற்பனை',
        'Print PDF Report': 'PDF அறிக்கையை அச்சிடு',
        'Monthly Revenue Velocity': 'மாதாந்திர வருவாய் வேகம்',
        'Period-over-period gross billing performance': 'காலத்திற்குரிய மொத்த பில்லிங் செயல்திறன்',
        'Historical Monthly Aggregates': 'வரலாற்று மாதாந்திர விவரங்கள்',
        'Billing Period': 'பில்லிங் காலம்',
        'Invoice Volumes': 'விலைப்பட்டியல் அளவுகள்',
        'Average Order Size (AOV)': 'சராசரி ஆர்டர் மதிப்பு (AOV)',
        'Total Value Collected': 'வசூலிக்கப்பட்ட மொத்த மதிப்பு',
        'Historical Quarterly Aggregates': 'வரலாற்று காலாண்டு விவரங்கள்',
        'Historical Annual Aggregates': 'வரலாற்று ஆண்டு விவரங்கள்',
        'Billing Year': 'பில்லிங் ஆண்டு',

        // Tax & Profit Reporter Page
        'Gross Revenue': 'மொத்த வருவாய்',
        'Turnover Pool': 'விற்பனைத் தொகுப்பு',
        'Operating Cost': 'இயக்கச் செலவு',
        'GST Collected': 'GST வசூலிக்கப்பட்டது',
        'Outward Liability': 'வெளிப்புறப் பொறுப்பு',
        'Net Profit Margin': 'நிகர லாப வரம்பு',
        'Net Retained Margin': 'நிகரத் தக்கவைக்கப்பட்ட லாபம்',
        'Revenue vs Operating Cost Velocity': 'வருவாய் மற்றும் இயக்கச் செலவு ஒப்பீடு',
        'Historical comparative cashflow trend matrix': 'வரலாற்று ஒப்பீட்டு பணப்புழக்கப் போக்கு மேட்ரிக்ஸ்',
        'Sales': 'விற்பனை',
        'Cost': 'செலவு',
        'Comprehensive Periodic Profit & Tax Grid': 'விரிவான காலமுறை லாப மற்றும் வரி விவரம்',
        'Print': 'அச்சிடு',
        'Fiscal Month': 'நிதியாண்டு மாதம்',
        'Gross Sales (Turnover)': 'மொத்த விற்பனை (விற்றுமுதல்)',
        'Outward Tax (GST)': 'வெளிப்புற வரி (GST)',
        'Operating Expenses': 'இயக்கச் செலவுகள்',
        'Retained Net Profit': 'தக்கவைக்கப்பட்ட நிகர லாபம்',
        'Profit Margin %': 'லாப வரம்பு %',

        // Festival Offers Page
        'Global Festival Offer Mode': 'ஒட்டுமொத்த திருவிழா சலுகை முறைமை',
        'When enabled, active offers will be automatically applied at the POS.': 'செயல்படுத்தப்படும்போது, செயலில் உள்ள சலுகைகள் POS-இல் தானாகவே பயன்படுத்தப்படும்.',
        'MODE ACTIVE': 'முறைமை செயலில் உள்ளது',
        'MODE INACTIVE': 'முறைமை செயலிழந்துள்ளது',
        'Available Offers': 'கிடைக்கக்கூடிய சலுகைகள்',
        'Create New Offer': 'புதிய சலுகையை உருவாக்கு',
        'All Products': 'அனைத்து தயாரிப்புகளும்',
        'Active Now': 'இப்போது செயலில் உள்ளது',
        'Scheduled / Expired': 'திட்டமிடப்பட்டது / காலாவதியானது',

        // Roles and general descriptions
        'Super Admin': 'தலைமை நிர்வாகி',
        'Admin': 'நிர்வாகி',
        'Cashier': 'காசாளர்',
        'Manager': 'மேலாளர்',

        // Months
        'January': 'ஜனவரி', 'February': 'பிப்ரவரி', 'March': 'மார்ச்', 'April': 'ஏப்ரல்',
        'May': 'மே', 'June': 'ஜூன்', 'July': 'ஜூலை', 'August': 'ஆகஸ்ட்',
        'September': 'செப்டம்பர்', 'October': 'அக்டோபர்', 'November': 'நவம்பர்', 'December': 'டிசம்பர்',
        'Jan': 'ஜன', 'Feb': 'பிப்', 'Mar': 'மார்', 'Apr': 'ஏப்', 'Jun': 'ஜூன்', 'Jul': 'ஜூலை', 'Aug': 'ஆக', 'Sep': 'செப்', 'Oct': 'அக்', 'Nov': 'நவ', 'Dec': 'டிச'
    }
};

let currentLang = localStorage.getItem('posLang') || 'EN';

function translateDOM() {
    const dict = translations[currentLang];
    if (!dict) return;
    
    // Sort keys based on length descending to translate longer multi-word phrases first
    const enDict = translations['EN'];
    const taDict = translations['TA'];
    let keys = Object.keys(enDict);
    
    if (currentLang === 'TA') {
        keys.sort((a, b) => b.length - a.length);
    } else {
        keys.sort((a, b) => (taDict[b] || '').length - (taDict[a] || '').length);
    }

    // Traverse and replace text nodes using tree walker
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while (n = walk.nextNode()) {
        // Skip script, style and standard input areas to prevent breaking functional bindings
        if (n.parentElement && (
            n.parentElement.tagName === 'SCRIPT' || 
            n.parentElement.tagName === 'STYLE' || 
            n.parentElement.tagName === 'NOSCRIPT' || 
            n.parentElement.tagName === 'TEXTAREA'
        )) {
            continue;
        }

        let text = n.textContent;
        let originalText = text;

        if (currentLang === 'TA') {
            for (let key of keys) {
                if (key.trim() === '') continue;
                if (text.includes(key)) {
                    console.log('[Translation Engine] Match found! Replacing "' + key + '" with "' + taDict[key] + '"');
                    text = text.split(key).join(taDict[key]);
                }
            }
        } else {
            for (let key of keys) {
                if (taDict[key].trim() === '') continue;
                if (text.includes(taDict[key])) {
                    console.log('[Translation Engine] Match found! Restoring "' + taDict[key] + '" to "' + key + '"');
                    text = text.split(taDict[key]).join(key);
                }
            }
        }

        if (text !== originalText) {
            console.log('[Translation Engine] DOM Update:', originalText.trim(), '->', text.trim());
            n.textContent = text;
        }
    }

    // Translate input placeholders
    document.querySelectorAll('input[placeholder]').forEach(input => {
        let ph = input.getAttribute('placeholder');
        if (!ph) return;

        let originalPh = ph;
        if (currentLang === 'TA') {
            for (let key of keys) {
                if (key.trim() === '') continue;
                ph = ph.split(key).join(taDict[key]);
            }
        } else {
            for (let key of keys) {
                if (taDict[key].trim() === '') continue;
                ph = ph.split(taDict[key]).join(key);
            }
        }

        if (ph !== originalPh) {
            input.setAttribute('placeholder', ph);
        }
    });

    const langText = document.getElementById('langText');
    if (langText) {
        langText.innerText = currentLang;
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'EN' ? 'TA' : 'EN';
    localStorage.setItem('posLang', currentLang);
    translateDOM();
    
    if (currentLang === 'TA') {
        showToast('தமிழ் மொழி தேர்ந்தெடுக்கப்பட்டது', 'success');
    } else {
        showToast('English selected', 'success');
    }
}

// Trigger initial translation if stored preference is TA, avoiding race conditions
function initLanguage() {
    if (currentLang === 'TA') {
        setTimeout(translateDOM, 100); // Let dynamic content load a bit first
    }
}

if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initLanguage();
} else {
    document.addEventListener('DOMContentLoaded', initLanguage);
}
