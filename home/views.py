from django.shortcuts import render
from django.views.generic import View
from home.models import *

class HoomeView(View):
    def get(self, request, *args, **kwargs):
        banners = banner.objects.all()
        tea = product.objects.all()
        blogs = blog.objects.all()
        data = {
            "banners":banners,
            "teas":tea,
            "blogs":blogs
        }
        return render(request, 'home.html',data)

class AboutView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'about.html')

class TeaView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'our-tea.html')

class RecipeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, '')

class LifeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'indian-life.html')

class NewView(View):
    def get(self, request, *args, **kwargs):
        return render(request, '')

class ContactView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'contact.html')
    
class BlogView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'blog.html')
    
class ErrorView(View):
    def get(self, request, *args, **kwargs):
        return render(request,'error.html')