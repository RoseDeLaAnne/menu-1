from django.urls import path

from .views import *

urlpatterns = [
    path('items/', get_items),
]
