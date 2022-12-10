from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views import *

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('sign-up/', SignUpView.as_view()),

    path('user-exist/<str:username>/', user_exist),
    path('user/<int:id>/', get_user),
    path('users/', get_users),
]
