
:start
cls

cd ..
echo Creating Virtual Environment
py -3.10 -m venv .venv
.venv\Scripts\activate.bat

echo Setting Up Django Server
cd server
python -m pip install --upgrade pip
pip install --upgrade setuptools
git checkout master
echo Installing Requirements
python -m pip install -r requirements.txt

echo Creating/Updating Database for Server
python manage.py makemigrations
python manage.py migrate

echo Setting Up React App
cd ..
cd client
npm install

echo Project Setup Finished
echo Press Any Key to Exit
pause
exit.
