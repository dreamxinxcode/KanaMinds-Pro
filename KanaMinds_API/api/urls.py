from django.urls import path
from .views.leaderboard import leaderboard

urlpatterns = [
    path('leaderboard/', leaderboard, name='leaderboard'),
]