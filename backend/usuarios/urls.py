from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registrar, name='register'),
    path('login/', views.entrar, name='login'),
    path('logout/', views.sair, name='logout'),
]