from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.

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

