from rest_framework.serializers import Serializer, ModelSerializer, SerializerMethodField, ImageField
from django.contrib.auth import get_user_model
from .models import Profile, Ban

User = get_user_model()

class ProfileSerializer(ModelSerializer):

    class Meta:
        model = Profile
        fields = ( 
            'birthdate', 
            'country', 
            'country_code', 
            'city', 
            'bio',
            'gems',
        )


class UserSerializer(ModelSerializer):
    profile = ProfileSerializer()

    class Meta:
        model = User
        fields = (
            'id',
            'profile',
            'email',
            'password',
            'username',
            'is_staff',
            'is_active',
            'date_joined',
            'ip',
            'is_banned',
            'is_paid',
        )
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        if 'password' not in validated_data:
            raise KeyError('Password is missing in validated_data')

        password = validated_data.pop('password')
        user = User.objects.create_user(password=password, **validated_data)
        Profile.objects.create(user=user, **profile_data)
        return user

class BanSerializer(ModelSerializer):
    class Meta:
        model = Ban
        fields = ['user', 'reason', 'permanent', 'expires']


class AvatarUploadSerializer(Serializer):
    avatar = ImageField()