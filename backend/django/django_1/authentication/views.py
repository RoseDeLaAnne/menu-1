from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *


class SignUpView(APIView):
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def user_exist(request, username):
    try:
        User.objects.get(username=username)

        return Response({'user_exist': True})
    except:
        return Response({'user_exist': False})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_users(request):
    try:
        users = User.objects.all()

        serializer = UserSerializer(
            users, context={'request': request}, many=True)

        return Response(serializer.data)
    except:
        return Response(status=404)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, id):
    try:
        user = User.objects.get(id=id)

        serializer = UserSerializer(
            user, context={'request': request}, many=False)

        return Response(serializer.data)
    except:
        return Response(status=404)
