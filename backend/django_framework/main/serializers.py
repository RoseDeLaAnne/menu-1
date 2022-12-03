from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import *


class DishSerializer(ModelSerializer):
    class Meta:
        model = Dish
        fields = '__all__'

        depth = 1
