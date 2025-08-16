from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db.models import Count
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .models import Postagem, Curtida
from .serializers import PostagemSerializer

# Create your views here.

# Registrar
@api_view(["POST"])
@permission_classes([AllowAny])
def registrar_usuario(request):
    username = request.data.get("username")
    password = request.data.get("password")
    
    if not username or not password:
        return Response({"error":"Preencha todos os campo"}, status=400)
    
    if User.objects.filter(username=username).exists():
        return Response({"error": "Usuário já existe"}, status=400)
    
    user = User.objects.create_user(username=username, password=password)
    return Response({"success":f"Usuário {user.username} criado com sucesso!"})

# Login
@api_view(["POST"])
@permission_classes([AllowAny])
def login_usuario(request):
    username = request.data.get("username")
    password = request.data.get("password")
    
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request,  user)
        return Response({"success": f"Usuário {username} logado"})
    return Response({"error": "Credenciais inválidas"},status=400)

# Logout
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_usuario(request):
    logout(request)
    return Response({"success": "Logout realizado"})
    
# Listar as postagens
@api_view(["GET"])
@permission_classes([AllowAny])
def listar_postagens(request):
    postagens = Postagem.objects.annotate(num_curtidas=Count('curtidas')).order_by('-num_curtidas')
    serializer = PostagemSerializer(postagens, many=True)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def criar_postagem(request):
    titulo = request.data.get("titulo")
    descricao = request.data.get("descricao")
    
    if not titulo or not descricao:
        return Response({"error": "Preencha título e descrição"}, status=400)
    
    postagem = Postagem.objects.create(
        titulo = titulo,
        descricao = descricao,
        autor = request.User
    )
    return Response({"success": "Postagem criada", "id": postagem.id})
    
    
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def curtir_postagem(request, postagem_id):
    postagem = get_object_or_404(Postagem, id = postagem_id)
    curtida, created = Curtida.objects.get_or_create(usuario = request.user, postagem=postagem)
    
    if not created:
        curtida.delete()
        return Response({"status": "removido", "postagem_id": postagem.id})

    return Response({"status": "curtido", "postagem_id": postagem.id})
    
@api_view(["GET"])
@permission_classes([AllowAny])
def ver_curtidas(request, postagem_id):
    postagem = get_object_or_404(Postagem, id=postagem_id)
    usuarios = [c.usuario.username for c in postagem.curtidas.all()]
    
    return Response({"postagem": postagem.titulo, "curtidas": usuarios})
    
