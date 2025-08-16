from django.urls import path
from . import views

urlpatterns = [
    # Autenticação
    path("auth/register/", views.registrar_usuario, name="registrar_usuario"),
    path("auth/login/", views.login_usuario, name="login_usuario"),
    path("auth/logout/",views.logout_usuario, name="logout_usuario"),
    
    # Postagens
    path("postagens/",views.listar_postagens, name="listar_postagens"),
    path("postagens/criar/",views.criar_postagem, name="criar_postagem"),
    path("postagens/<int:postagem_id>/curtir/",views.curtir_postagem, name="curtir_postagem"),
    path("postagens/<int:postagem_id>/curtidas/", views.ver_curtidas, name="ver_curtidas")
]