from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'cicada.home.front', name='home'),
    
    url(r'^readings/listen/$', 'cicada.readings.views.listen', name='data_listener'),
    url(r'^readings/retrieve_latest/$', 'cicada.readings.views.retrieve_latest', name='data_retriver'),
    
)
