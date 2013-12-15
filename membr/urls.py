from django.conf import settings
from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(
        regex=r'^static/(?P<path>.*)$',
        view='django.views.static.serve',
        kwargs={'document_root': settings.STATIC_ROOT},
    ),
    url('', 'membr.views.home'),
)

