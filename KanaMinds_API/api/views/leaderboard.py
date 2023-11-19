from rest_framework.decorators import api_view
from rest_framework.response import Response
from users.models import CustomUser
from ..serializers.leaderboard import LeaderboardSerializer

@api_view(['GET'])
def leaderboard(request):
    try:
        users = CustomUser.objects.all().order_by('-profile__gems')
        serializer = LeaderboardSerializer(users, many=True)
        return Response(serializer.data)
    except Exception as e:
        # Handle exceptions (e.g., database errors)
        return Response({"error": str(e)})