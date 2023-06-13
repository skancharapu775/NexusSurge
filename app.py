from flask import Flask, redirect, url_for, request, session
from flask_cors import CORS
from datetime import timedelta
import json

app = Flask(__name__)
CORS(app) # comment line on deployment

app.secret_key = 'somethingrandom'

# session.permanent = true defines this as permanent
app.permanent_session_lifetime = timedelta(days=2)


@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

# Sends data to the client
@app.route('/members')
def members ():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route('/')
def redirect ():
    return redirect(url_for('home'))

# landing page
@app.route('/home', methods=['GET', 'POST'])
def home ():

    if request.method == 'POST':
        return 
    else:
        logged_in = intialize_user()
        return 
    
# study materials
@app.route('/sets', methods=['GET', 'POST'])
def sets():

    if request.method == "POST":
        return    
    else:
        logged_in = intialize_user()
        return 

# individual study option
@app.route('/study', methods=['GET', 'POST'])
def study():

    if request.method == "POST":
        return 
    else:
        logged_in = intialize_user()
        return 

@app.route('/profile', methods=['GET', 'POST'])
def profile():

    if request.method == "POST":
        return 
    else:
        logged_in = intialize_user()

        if not logged_in:
            return redirect(url_for('login'))
        
    
@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == "POST":
        return 
    else:
        return 

def intialize_user():
    # Run following on every get request
        if 'status' not in session:
            session.permanent = True
            session['status'] = 'active'

        if 'first_entry' not in session:
            # First page
            session['first_entry'] = False
            # Pull data from database and add to session
        else:
            if 'logged_in' in session:
                return True
            else:
                return False

if __name__ == '__main__':
    app.run(debug=True)

