# Generated by Django 4.1.3 on 2022-12-03 11:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_dish_remove_category_category_display_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='dish_type',
        ),
        migrations.AddField(
            model_name='dish',
            name='dish_type',
            field=models.ManyToManyField(to='main.type'),
        ),
    ]