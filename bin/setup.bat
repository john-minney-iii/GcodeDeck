@echo off

echo Creating Virtual Environment and Install Libraries...
start /b /wait cmd.exe /C "cd .. && py -3.10 -m venv .venv && .venv\Scripts\activate.bat && cd server && python -m pip install --upgrade pip && pip install --upgrade setuptools && git checkout master && python -m pip install -r requirements.txt && exit"

echo Creating/Updating Datbase for Server...
start /b /wait cmd.exe /C "cd .. && .venv\Scripts\activate.bat && cd server && python manage.py makemigrations && python manage.py migrate && exit"

echo Setting Up React App...
start /b /wait cmd.exe /C "cd .. && cd client && npm install && exit"

echo Project Setup Finished
echo Press Any Key to Exit
pause
exit
