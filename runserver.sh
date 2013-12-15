#!/bin/bash
exec venv/bin/gunicorn --config conf/gun.py membr.wsgi:application
