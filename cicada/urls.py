from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'cicada.home.front', name='home'),
    
    url(r'^$', 'cicada.readings.listen', name='data_listener'),
)
