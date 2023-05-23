
from django.contrib import admin
from django.urls import path, include
from home.views import *

urlpatterns = [
    path('', HoomeView.as_view()),
    path('about',AboutView.as_view()),
    path('our-tea', TeaView.as_view()),
    path('recipe', RecipeView.as_view()),
    path('indian-life', LifeView.as_view()),
    path('our-dealers', DealerView.as_view()),
    path('contact', ContactView.as_view()),
    path('product/<int:pk>', SingleProductView.as_view(), name='single_product'),
    path('story/<int:pk>', StoryView.as_view(), name='story'),
    path('recipe/<int:pk>', recipeView.as_view(), name='recipe'),

]
