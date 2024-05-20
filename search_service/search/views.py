from django.shortcuts import render
from django.http import JsonResponse
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from .search import search_products

class SearchAPIView(APIView):
    def get(self, request, keyword):
        items = search_products(keyword)

        return JsonResponse({
            'data': items,
        })
            