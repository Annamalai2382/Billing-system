from django.urls import path
from . import views

urlpatterns = [
    path('', views.pos, name='pos_billing'),
    path('customers/', views.customer_list, name='customer_list'),
    path('customers/add/', views.add_customer, name='add_customer'),
    path('customers/edit/<int:pk>/', views.edit_customer, name='edit_customer'),
    path('customers/delete/<int:pk>/', views.delete_customer, name='delete_customer'),
    path('process/', views.process_payment, name='process_payment'),
    path('invoice/<int:pk>/', views.view_invoice, name='view_invoice'),
    path('invoice/<int:pk>/email/', views.send_invoice_email, name='send_invoice_email'),
    
    # Festival Offer Management
    path('festival-offers/', views.manage_festival_offers, name='manage_festival_offers'),
    path('festival-offers/add/', views.add_festival_offer, name='add_festival_offer'),
    path('festival-offers/delete/<int:pk>/', views.delete_festival_offer, name='delete_festival_offer'),
]
