from rest_framework import serializers
from .models import Postagem

class PostagemSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source="autor.username", read_only=True)
    num_curtidas = serializers.SerializerMethodField()
    
    class Meta:
        model = Postagem
        fields = ["id","titulo","descricao","autor","num_curtidas"]
        
    def get_num_curtidas(self,obj):
        return obj.curtidas.count()
