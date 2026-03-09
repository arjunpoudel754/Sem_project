from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.auth, name='auth'),
    path('logout/', views.logout_view, name='logout'),
    path('check-email/', views.check_email, name='check_email'),
]
