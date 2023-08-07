from django.shortcuts import render
from django.views.generic import View
from home.models import *
from django.http import JsonResponse

class HoomeView(View):
    def get(self, request, *args, **kwargs):
        banners = banner.objects.all()
        tea = product.objects.all()
        blogs = blog.objects.all()
        data = {
            "banners":banners,
            "teas":tea,
            "blogs":blogs,
        }
        return render(request, 'home.html',data)

class AboutView(View):
    def get(self, request, *args, **kwargs):
        csrs = csr.objects.all()
        data = {
            "csrs":csrs
        }
        return render(request, 'about.html',data)

class TeaView(View):
    def get(self, request, *args, **kwargs):
        products = product.objects.all()
        tags = tag.objects.all()
        data = {
            "products":products,
            "tags":tags
        }
        return render(request, 'our-tea.html',data)

class RecipeView(View):
    def get(self, request, *args, **kwargs):
        recipes = recipe.objects.all()
        data = {
            "recipes":recipes
        }
        return render(request, 'recipe.html',data)

class LifeView(View):
    def get(self, request, *args, **kwargs):
        blogs = blog.objects.all()
        data = {
            "blogs":blogs,
        }
        return render(request, 'indianlife.html',data)

class DealerView(View):
    def get(self, request, *args, **kwargs):
        purcase = point_per_purchase.objects.all()
        prize = prize_points.objects.all()
        dealer = dealers.objects.all()
        data = {
            "purchases":purcase,
            "prizes":prize,
            "dealers":dealer,
        }
        return render(request, 'dealers.html',data)

class ContactView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'contact.html')
    
    def post(self, request, *args, **kwargs):
        print(request.POST.get('name'))
        name = request.POST.get('name')
        email = request.POST.get('email')
        phoneno = request.POST.get('phoneno')
        city = request.POST.get('city')
        message = request.POST.get('message')
        

        if name and email and message and phoneno and city:
            contact_message = Contact.objects.create(name=name, email=email, city=city,phoneno=phoneno, message=message)
            return JsonResponse({"status": "success"})
        else:
            errors = form.errors
            return JsonResponse({"status": "error", "errors": errors})

class BlogView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'blog.html')
    
class ErrorView(View):
    def get(self, request, *args, **kwargs):
        return render(request,'error.html')

class SingleProductView(View):
    def get(self, request, pk):
        Product = product.objects.get(pk=pk)
        data = {
            "product":Product
        }
        return render(request,'teapage.html',data)

class StoryView(View):
    def get(self, request, pk):
        story = blog.objects.get(pk=pk)
        data = {
            "story":story
        }
        return render(request,'story.html',data)

class recipeView(View):
    def get(self, request, pk):
        recipeV = recipe.objects.get(pk=pk)
        data = {
            "recipe":recipeV
        }
        return render(request,'tearecipe.html',data)
