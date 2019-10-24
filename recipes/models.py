from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Recipe(models.Model):
    OVEN = 'OVEN'
    GRILL = 'GRILL'
    STOVE = 'STOVE'
    OTHER = 'OTHER'

    F = 'F'
    C = 'C'

    COOK_METHOD_CHOICES = [
        (OVEN, 'Oven'),
        (GRILL, 'Grill'),
        (STOVE, 'Stove'),
        (OTHER, 'Other'),
    ]

    TEMPERATURE_UNIT_CHOICES = [
        (F, 'F'),
        (C, 'C'),
    ]




    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images')
    created_by = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    cook_method = models.CharField(max_length=10, choices=COOK_METHOD_CHOICES, default = OVEN)
    prep_time = models.CharField(max_length=25, default = 1)
    cook_time = models.CharField(max_length=25, default = 1)
    cook_temp = models.CharField(max_length=255, default = 1)
    temperature_unit = models.CharField(max_length=10, choices=TEMPERATURE_UNIT_CHOICES, default = F)
    yield_amount = models.CharField(max_length=25, default = 1)
    yield_unit = models.CharField(max_length=25, default = 1)
    directions = models.CharField(max_length=255, default = 1)
    note = models.CharField(max_length=25, default = 1)





    def __str__(self):
        return self.title[:25]
