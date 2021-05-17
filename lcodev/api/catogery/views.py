from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CatogerySerializer
from .models import Catogery

# Create your views here.
class CatogeryViewSet(viewsets.ModelViewSet):
    queryset = Catogery.objects.all().order_by('name')
    serializer_class = CatogerySerializer