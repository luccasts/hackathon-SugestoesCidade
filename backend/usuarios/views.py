from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db.models import Count
from .models import Postagem, Curtida


# Create your views here.

# Home
def home(request):
    postagens = (
        Postagem.objects
        .annotate(num_curtidas=Count('curtidas'))
        .order_by('-num_curtidas')
        )
    
    for p in postagens:
        p.ja_curtiu = p.curtidas.filter(usuario=request.user).exists() if request.user.is_authenticated else False
    
    return render(request, 'usuarios/home.html', {'postagens': postagens})

@login_required
def criar_postagem(request):
    if request.method == "POST":
        titulo = request.POST.get("titulo")
        descricao = request.POST.get("descricao")
        Postagem.objects.create(titulo=titulo, descricao=descricao, autor=request.user)
        messages.success(request, "Postagem criada com sucesso")
        return redirect('home')
    return render(request, 'usuarios/criar_postagem.html')

@login_required
def curtir_postagem(request, postagem_id):
    postagem = get_object_or_404(Postagem, id = postagem_id)
    
    curtida = Curtida.objects.filter(usuario = request.user, postagem=postagem).first()
    
    if curtida is not None:
        curtida.delete()
        messages.info(request, "Você removeu sua curtida da postagem")
    else:
        Curtida.objects.create(usuario = request.user, postagem = postagem)
        messages.success(request, "Você curtiu a postagem")

    return redirect('home')
    
@login_required
def ver_curtida(request, postagem_id):
    postagem = get_object_or_404(Postagem, id=postagem_id)
    curtidas = Curtida.objects.filter(postagem = postagem).select_related("usuario")
    
    return render(request, "usuarios/ver_curtidas.html", {
        "postagem":postagem,
        "curtidas":curtidas,
    })
    
# Register
def registrar(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            usuario = form.save()
            login(request, usuario)
            return redirect("home")
    else:
        form = UserCreationForm()
    return render(request, 'usuarios/register.html',{'form': form})

# Login
def entrar(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            nome = form.cleaned_data.get('username')
            senha = form.cleaned_data.get('password')
            usuario = authenticate(username=nome, password=senha)
            if usuario:
                login(request, usuario)
                messages.success(request, "Login realizado com sucesso!")
                return redirect('home')
            else:
                messages.error(request, "Usuário ou senha inválidos.")
    else:
        form = AuthenticationForm()
    return render(request, 'usuarios/login.html', {'form': form})

# Logout
def sair(request):
    logout(request)
    messages.info(request, "Você saiu da conta.")
    return redirect('login')