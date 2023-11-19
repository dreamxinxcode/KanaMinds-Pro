from rest_framework.serializers import Serializer, ModelSerializer, SerializerMethodField, ImageField
from django.contrib.auth import get_user_model
from users.models import Profile, Ban

User = get_user_model()

class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ( 
            'country_code', 
            'gems',
        )


class LeaderboardSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = (
            'id',
            'profile',
            'username',
        )