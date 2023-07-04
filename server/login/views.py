from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def index(request):
    # return HttpResponse('Hello, this is ', request)
    if request.method == "GET":
        return HttpResponse("Hello, this is GET Request")
    elif request.method == "POST":
        return HttpResponse("POST Request")