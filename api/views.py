from django.shortcuts import render
from rest_framework import generics

from recipes.models import Recipe
from .serializers import RecipeSerializer

class RecipeListCreateAPIView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class MyRecipeListCreateAPIView(generics.ListCreateAPIView):
    # queryset = Recipe.objects.filter(created_by=request.user)
    serializer_class = RecipeSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Recipe.objects.filter(created_by=user)
