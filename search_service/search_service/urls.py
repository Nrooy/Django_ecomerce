from django.contrib import admin
from django.urls import path
from search.views import SearchAPIView

urlpatterns = [
    path('search/<str:keyword>', SearchAPIView.as_view(), name='search_with_keyword'),
]
