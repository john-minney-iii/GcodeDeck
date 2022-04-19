
cd ..
cd ..
gnome-terminal --tab --title="Django Server" -- bash -c "source .venv/bin/activate && cd server && python manage.py runserver"
gnome-terminal --tab --title="React Client" -- bash -c "cd client && npm start"
