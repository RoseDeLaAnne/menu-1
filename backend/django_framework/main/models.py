from django.db import models

from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    category_name = models.CharField(max_length=255)

    def __str__(self):
        return self.category_name


class Type(models.Model):
    type_name = models.CharField(max_length=255)

    def __str__(self):
        return self.type_name


class Dish(models.Model):
    dish_category = models.ForeignKey(Category, on_delete=models.CASCADE)
    dish_weight = models.IntegerField(default=0)
    dish_name = models.CharField(max_length=255)
    dish_price = models.FloatField(default=0.0)    
    dish_image = models.ImageField(upload_to='items', blank=True, null=True)
    dish_type = models.ManyToManyField(Type)

    def __str__(self):
        return self.dish_name
