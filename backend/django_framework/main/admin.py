from django.contrib import admin

from django.utils.translation import gettext_lazy as _

from .models import *


admin.site.register(Category)
admin.site.register(Type)
admin.site.register(Item)
