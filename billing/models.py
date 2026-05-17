from django.db import models
from django.contrib.auth.models import User
from inventory.models import Product

class Customer(models.Model):
    business = models.ForeignKey('core.Business', on_delete=models.CASCADE, null=True, blank=True, related_name='customers')
    name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    gstin = models.CharField(max_length=15, blank=True, null=True, help_text="Customer GSTIN (for B2B)")

    def __str__(self):
        return self.name

class FestivalOffer(models.Model):
    DISCOUNT_TYPES = (
        ('PERCENTAGE', 'Percentage'),
        ('FIXED', 'Fixed Amount'),
    )
    
    business = models.ForeignKey('core.Business', on_delete=models.CASCADE, related_name='offers')
    name = models.CharField(max_length=200)
    discount_type = models.CharField(max_length=10, choices=DISCOUNT_TYPES, default='PERCENTAGE')
    discount_value = models.DecimalField(max_digits=10, decimal_places=2)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    is_active = models.BooleanField(default=True)
    
    # Selection logic
    apply_to_all = models.BooleanField(default=True)
    products = models.ManyToManyField(Product, blank=True, related_name='offers')
    categories = models.ManyToManyField('inventory.Category', blank=True, related_name='offers')
    
    priority = models.IntegerField(default=0, help_text="Higher priority offers are applied first")

    def __str__(self):
        return self.name

class Invoice(models.Model):
    PAYMENT_METHODS = (
        ('CASH', 'Cash'),
        ('CARD', 'Card'),
        ('UPI', 'UPI'),
    )
    
    STATUS_CHOICES = (
        ('PAID', 'Paid'),
        ('PENDING', 'Pending'),
        ('CANCELLED', 'Cancelled'),
    )

    business = models.ForeignKey('core.Business', on_delete=models.CASCADE, null=True, blank=True, related_name='invoices')
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    customer = models.ForeignKey(Customer, on_delete=models.SET_NULL, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    discount_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    applied_offer_name = models.CharField(max_length=200, blank=True, null=True)
    gst_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    cgst_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    sgst_amount = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    payment_method = models.CharField(max_length=10, choices=PAYMENT_METHODS, default='CASH')
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PAID')

    def __str__(self):
        return f"INV-{self.id} - {self.total_amount}"

class InvoiceItem(models.Model):
    invoice = models.ForeignKey(Invoice, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    quantity = models.IntegerField(default=1)
    original_unit_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    discount_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    unit_price = models.DecimalField(max_digits=10, decimal_places=2) # Final price after discount
    hsn_code = models.CharField(max_length=20, blank=True, null=True) # at time of sale
    gst_rate = models.DecimalField(max_digits=5, decimal_places=2, default=0.00) # at time of sale
    total_price = models.DecimalField(max_digits=12, decimal_places=2) # quantity * unit_price
    
    def __str__(self):
        return f"{self.product.name} x {self.quantity}"
