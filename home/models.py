from django.db import models

class banner(models.Model):
    title = models.TextField()
    image = models.ImageField( upload_to="banners")
    link = models.URLField(null=True,blank=True)

    def __str__(self):
        return self.title
    
class blog(models.Model):
    title = models.CharField( max_length=300)
    image = models.ImageField(upload_to="blogs")
    description = models.TextField()
    #content
    def __str__(self):
        return self.title

class recipe(models.Model):
    title = models.CharField( max_length=300)
    image = models.ImageField(upload_to="recipe")
    #content

class tag(models.Model):
    title = models.CharField( max_length=100)

    def __str__(self) -> str:
        return self.title

class product(models.Model):
    tag = models.ForeignKey("tag", on_delete=models.CASCADE)
    title = models.CharField( max_length=300)
    image = models.ImageField(upload_to="products")
    bg_image = models.ImageField(upload_to="bgImageProducts")
    shop_link = models.URLField()
    description = models.TextField()
    ingridents = models.TextField()
    how_to_serve = models.TextField()
    weight = models.CharField( max_length=20)