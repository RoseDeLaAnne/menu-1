from django.db import models

from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Dish(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    weight = models.PositiveIntegerField(default=0)
    name = models.CharField(max_length=255)
    price = models.FloatField(default=0.0)
    types = models.ManyToManyField(Type, blank=True)
    color = models.CharField(max_length=255, blank=True, null=True)
    background_color = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='dishes', blank=True, null=True)

    def __str__(self):
        return self.name
