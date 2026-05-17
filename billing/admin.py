from django.contrib import admin
from .models import Customer, Invoice, InvoiceItem, FestivalOffer

@admin.register(FestivalOffer)
class FestivalOfferAdmin(admin.ModelAdmin):
    list_display = ('name', 'discount_type', 'discount_value', 'start_date', 'end_date', 'is_active', 'business')
    list_filter = ('is_active', 'discount_type', 'business')
    search_fields = ('name',)

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'email', 'business')
    search_fields = ('name', 'phone')

class InvoiceItemInline(admin.TabularInline):
    model = InvoiceItem
    extra = 0

@admin.register(Invoice)
class InvoiceAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer', 'total_amount', 'discount_amount', 'applied_offer_name', 'date', 'status', 'business')
    list_filter = ('status', 'date', 'business')
    inlines = [InvoiceItemInline]
