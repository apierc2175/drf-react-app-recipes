from django.shortcuts import render
from django.views import generic
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy


class SignUpView(generic.CreateView):
    form_class = UserCreationForm
    template_name = 'signup.html'
    success_url = reverse_lazy('login')

class LoginView(generic.CreateView):
    form_class = UserCreationForm
    template_name = 'login.html'
    success_url = reverse_lazy('IndexView')
