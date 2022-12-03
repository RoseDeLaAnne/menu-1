from django.db import models

from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    category_name = models.CharField(max_length=255)
    category_display_name = models.CharField(max_length=255)

    def __str__(self):
        return self.category_display_name


class Type(models.Model):
    type_name = models.CharField(max_length=255)
    type_display_name = models.CharField(max_length=255)

    def __str__(self):
        return self.type_display_name


class Item(models.Model):
    item_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    item_weight = models.IntegerField(default=0)
    item_name = models.CharField(max_length=255)
    item_display_name = models.CharField(max_length=255)
    item_price = models.IntegerField(default=0)
    item_type = models.ForeignKey(Type, on_delete=models.CASCADE)
    item_img = models.ImageField(upload_to='items', blank=True, null=True)

    def __str__(self):
        return self.item_display_name
