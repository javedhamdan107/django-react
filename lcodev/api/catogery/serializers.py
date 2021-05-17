from rest_framework import serializers
from .models import Catogery

class CatogerySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Catogery
        fields= ('name','description')