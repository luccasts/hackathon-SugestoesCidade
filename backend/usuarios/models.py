from django.db import models
from django.contrib.auth.models import User
from django.db.models import Count

# Create your models here.

class Postagem(models.Model):
    titulo = models.CharField(max_length=255)
    descricao = models.TextField()
    autor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='postagens')
    data_criacao = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.titulo
    
    @property
    def total_curtidas(self):
        return self.curtidas.count()
    
class Curtida(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    postagem = models.ForeignKey(Postagem, related_name="curtidas", on_delete=models.CASCADE)
    data_curtida = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('usuario', 'postagem')
        
    def __str__(self):
        return f"{self.usuario.username} curtiu {self.postagem.titulo}"
    