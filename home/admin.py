from django.contrib import admin
from home.models import *

@admin.register(banner)
class productAdmin(admin.ModelAdmin):
    list_display = ("title","link")

@admin.register(product)
class bannerAdmin(admin.ModelAdmin):
    list_display = ("title","tag","weight")

@admin.register(blog)
class blogAdmin(admin.ModelAdmin):
    list_display = ("title","description")
    
@admin.register(recipe)
class recipeAdmin(admin.ModelAdmin):
    list_display = ["title"]
    
@admin.register(tag)
class tagAdmin(admin.ModelAdmin):
    list_display = ["title"]
    
