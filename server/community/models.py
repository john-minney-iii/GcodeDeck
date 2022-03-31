from django.db import models

STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class ReleasePost(models.Model):
    title=models.CharField(max_length=100, unique=True)
    post_date=models.DateTimeField(auto_now=True)
    content=models.TextField()
    status=models.IntegerField(choices=STATUS, default=0)

    class Meta:
        ordering = ['-post_date']

    def __str__(self):
        return str(self.title)

class ContactRequest(models.Model):
    author=models.CharField(max_length=60)
    post_date=models.DateTimeField(auto_now=True)
    email=models.CharField(max_length=100)
    content=models.TextField()

    def __str__(self):
        return f'{self.author} - {self.post_date}'

class SystemRequest(models.Model):
    author=models.CharField(max_length=60)
    post_date=models.DateTimeField(auto_now=True)
    email=models.CharField(max_length=100)
    content=models.TextField()

    def __str__(self):
        return f'{self.author} - {self.post_date}'

class BugReport(models.Model):
    author=models.CharField(max_length=60)
    post_date=models.DateTimeField(auto_now=True)
    email=models.CharField(max_length=100)
    content=models.TextField()

    def __str__(self):
        return f'{self.author} - {self.post_date}'
