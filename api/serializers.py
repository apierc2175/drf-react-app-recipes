from rest_framework import serializers

from recipes.models import Recipe

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'created_by', 'image', 'cook_method', 'prep_time', 'cook_time', 'cook_temp', 'temperature_unit', 'yield_amount', 'yield_unit', 'directions', 'note')

class MyRecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'title', 'created_by', 'image', 'cook_method', 'prep_time', 'cook_time', 'cook_temp', 'temperature_unit', 'yield_amount', 'yield_unit', 'directions', 'note')
