#!/bin/Linux/setup

echo "Creating Virtual Environment and Installing Libraries..."
cd ..
cd ..
virtualenv -p /usr/bin/python3.10 .venv
pid=$!
wait $pid
source .venv/bin/activate
cd server
python -m pip install --upgrade pip
pid=$!
wait $pid
pip install --upgrade setuptools
pid=$!
wait $pid
git checkout main
python -m pip install -r requirements.txt
pid=$!
wait $pid

echo "Creating/Updating Database for Server..."
python manage.py makemigrations
pid=$!
wait $pid
python manage.py migrate
pid=$!
wait $pid

echo "Setting Up React App..."
cd ..
cd client
npm install
pid=$!
wait $pid

echo "Project Setup Finished"
exit
