# from django.shortcuts import render
from django.http import HttpResponse
# from rest_framework.response import Response
# from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST
# from django.views.decorators.csrf import csrf_exempt


from rest_framework.views import APIView

# Create your views here.
# @csrf_exempt
# def index(request):
#     # return HttpResponse('Hello, this is ', request)
#     if request.method == "GET":
#         return HttpResponse("Hello, this is GET Request")
#     if request.method == "POST":
#         return HttpResponse('POST Request')

from rest_framework.views import APIView


class SignInView(APIView):
    def get(self, request):
        return HttpResponse('This is GET request')
    def post(self, request):
        data = request.data
        print(data)
        # return HttpResponse('mail'+ )
        # return HttpResponse("THis is is test of the request")