@echo off

start cmd.exe /C "cd .. && cd .. && .\.venv\Scripts\activate && cd server && python manage.py runserver"
start cmd.exe /C "cd .. && cd .. && cd client && npm start"
