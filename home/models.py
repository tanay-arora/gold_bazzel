from django.db import models
from ckeditor.fields import RichTextField

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
    author = models.CharField(max_length=220,null=True)
    content = RichTextField(null=True)
    def __str__(self):
        return self.title

class recipe(models.Model):
    title = models.CharField( max_length=300)
    image = models.ImageField(upload_to="recipe")
    content = RichTextField(null=True)
    def __str__(self):
        return self.title

class tag(models.Model):
    title = models.CharField( max_length=100)

    def __str__(self) -> str:
        return self.title

class csr(models.Model):
    title = models.CharField(max_length=120)
    image = models.ImageField(upload_to="csr")
    description = models.TextField()
    def __str__(self) -> str:
        return self.title

class product(models.Model):
    tag = models.ForeignKey("tag", on_delete=models.CASCADE)
    title = models.CharField( max_length=300)
    image = models.ImageField(upload_to="products")
    shop_link = models.URLField()
    description = models.TextField()
    ingridents = models.TextField()
    how_to_serve = models.TextField()
    weight = models.CharField( max_length=20)
    def __str__(self) -> str:
        return self.title

class point_per_purchase(models.Model):
    points = models.CharField(max_length= 18)
    product = models.ForeignKey("product", on_delete=models.PROTECT)
    def __str__(self) -> str:
           return self.points

class prize_points(models.Model):
    points = models.CharField(max_length= 18)
    prize = models.CharField(max_length=120)
    image = models.ImageField(upload_to="prizes")
    def __str__(self) -> str:
           return self.prize

class dealers(models.Model):
    name = models.CharField(max_length=120)
    image = models.ImageField(upload_to="dealers")
    points = models.CharField(max_length=18)
    def __str__(self) -> str:
           return self.name
