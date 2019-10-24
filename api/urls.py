from django.urls import path, include
from .views import RecipeListCreateAPIView
from .views import MyRecipeListCreateAPIView

app_name = 'api'

urlpatterns = [
    path('recipes/', RecipeListCreateAPIView.as_view(), name='recipe-list-create'),
    path('recipes/my/', MyRecipeListCreateAPIView.as_view(), name='my-recipe-list-create'),
    path('rest-auth/', include('rest_auth.urls')),
]
