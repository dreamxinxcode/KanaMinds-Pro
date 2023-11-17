from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.base_user import BaseUserManager

UNITS = (
    ('metric', 'Metric'),
    ('imperial', 'Imperial'),
)

class CustomUserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifier
    for authentication instead of usernames.
    """

    def create_user(self, username, email, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        password = extra_fields.pop('password', None)
        if not email:
            raise ValueError(_("The Email must be set"))
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password=None, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(username, email=email, password=password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True)
    username = models.CharField(max_length=20)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    ip = models.GenericIPAddressField(blank=True, null=True)
    is_banned = models.BooleanField(default=False)
    is_paid = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    objects = CustomUserManager()

    def __str__(self) -> str:
        return self.email


class Profile(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    birthdate = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=255, blank=True, null=True)
    country_code = models.CharField(max_length=3, blank=True, null=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    gems = models.IntegerField(default=0)
    
    def __str__(self) -> str:
        return f'({self.user.username}) - {self.user.email}'
    

class Ban(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.DO_NOTHING)
    reason = models.TextField(null=True, blank=True)
    ip = models.GenericIPAddressField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    permanent = models.BooleanField(default=True)
    expires = models.DateField(null=True, blank=True)

    def __str__(self) -> str:
        return f'{self.ip} - {self.reason}'
    
    def save(self, *args, **kwargs):
        self.user.is_banned = True;
        super().save(*args, **kwargs) 
