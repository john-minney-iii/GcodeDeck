# GCODEdeck Senior Project
BACS371 senior project for generating gcode<br>
**README version 1 : updated 3/9/22**

## Setting up a local dev environment
The following instructions are for setting up a local development environment on your personal machine.
The instructions are Windows focuses, for different OS follow their guidelines. Before you can run the app
you need the secrets.py file from me (John Minney), contact me if you need it. This file will be placed within
the config dir. <br>
**This file can NOT be pushed to the repo. It contains sensative info about the project**

---
### Installation steps
1. Install Python 3.10.x x86-64 from https://www.python.org/
2. Install and setup NodeJs from https://nodejs.org/en/download/
3. Install Git from https://git-scm.com/download/win 
    <br>**Note:** Make sure you add git to your path so it can be used from CMD. Also have it checkout line endings as-is and commit Unix style line
4. Open a Command Window in the directory you keep your projects and follow these commands
> 1. `git clone git@github.com:john-minney-iii/GcodeDeck.git`
> 1. `cd GcodeDeck`
> 1. `py -3.10 -m venv .venv`
> 1. `.venv\Scripts\activate.bat`
5. You are now working within your python virtual environment. Follow these next sets of commands
> 1. `cd server` 
> 1. `python -m pip install --upgrade pip`
> 1. `pip install --upgrade setuptools`
> 1. `git checkout master`
> 1. `python -m pip install -r requirements.txt`
6. Now to install dependences for the react app. Follow these commands
> 1. `cd ..`
> 1. `cd client`
> 1. `npm install`

---
### Running the project
To run a local version of the project you need to start both the django server and the react client. This can be done using two different terminal sessions.<br>
In one terminal session follow these commands (make sure you are in the server dir and activated the virtual env)
> `python manage.py runserver`<br>

In another terminal session follow these commands (make sure you are in the client dir)
> `npm start`

---
### Updating Project Dependencies
Any time you need to add a new package to Python/Pip, make sure that you properly add it to the list of dependences.

Following that, all other developers will need to update their environments

- To add a Python Dependency
    - Add the package name and exact version to 'requirements.txt'
- To update your Python environment run `python -m pip install -r requirements.txt`

---
### Pushing To The Repo
Make Sure to Checkout Jacob's Tutorial. It is amazing [Video Link](https://youtu.be/0urqEJmf73s)

To create a branch you can either follow the steps below or ask me (John Minney) and I can get it set up for you.
> * While looking at the Github page for the project look for a dropdown menu that will most likely say "main"
> * Click on this dropdown and make sure you are on the main branch
> * Enter the name of your new branch in the text box
> * Once you enter the name there will be a section that says "Create branch: branch_name from 'main'
> * Click that and it will create the new branch
> * Once you have created the new branch pull on your local machine and you will be able to checkout the new branch

For the following steps replace *branch_name* with your teams working branch.
If you are using git bash (command line) follow these steps to switch branches.
> If you are using a UI follow their documentation or tutorial videos to switch branches
* Find your way to the local version of the project
* Type the command `git branch -a`
* If you don't see your branch listed run `git pull`
* If you can locate your branch use the command `git checkout branch_name`
* You are now working on your team's branch. Push code like you would normally

**Important!!**
The first time you push to the branch use the command `git push -u origin branch_name`

When you are done working on your branch create a Pull Request for the code to be reviewed. This will allow me to ensure that any new code won't cause a merge conflict on the production version.
