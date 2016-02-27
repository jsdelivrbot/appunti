from django.conf.urls import url
from . import views


app_name = 'lists'
urlpatterns = [
    url(r'^(\d+)/$', views.view_list, name='view_list'),
    url(r'^new$', views.new_list, name='new_list'),
]
