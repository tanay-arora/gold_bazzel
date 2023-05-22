
from django.contrib import admin
from django.urls import path, include,re_path
from home.views import *

urlpatterns = [
    path('', HoomeView.as_view()),
    path('about',AboutView.as_view()),
    # path('our-tea', TeaView.as_view()),
    # path('recipe', RecipeView.as_view()),
    # path('indian-life', LifeView.as_view()),
    # path('whats-new', NewView.as_view()),
    # path('contact', ContactView.as_view()),

]
