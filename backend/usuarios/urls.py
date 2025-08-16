from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.entrar, name='login'),
    path('register/', views.registrar, name='register'),
    path('logout/',views.sair, name='logout'),
    path('nova/',views.criar_postagem, name='criar_postagem'),
    path('curtir/<int:postagem_id>/',views.curtir_postagem, name='curtir_postagem'),
]