from flask import Flask, redirect, url_for, request, session
from flask_cors import CORS
from datetime import timedelta
import sqlite3
import json

app = Flask(__name__)
CORS(app) # comment line on deployment

app.secret_key = 'somethingrandom'

# session.permanent = true defines this as permanent
app.permanent_session_lifetime = timedelta(days=14)


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
        # possiblities: two buttons, search database, import set, press on game
        return 
    else:
        if 'active' in session:
            # pull recent sets from session
            return # logged_in, send recent sets
        else:
            return # not_logged_in, send popular sets
    
# study materials
@app.route('/add', methods=['GET', 'POST'])
def add():

    if request.method == "POST":
        # possiblities: game buttons on recent sets, search database, import section
        return    
    else:

        if 'active' in session:
            # pull recent sets from session
            return # logged_in, send recent sets
        else:
            return # not logged_in, send popular sets

# individual study option
@app.route('/study', methods=['GET', 'POST'])
def study():

    if request.method == "POST":
        # set search bar, sheet search bar, study buttons on sets and materials
        return 
    else:
        if 'active' in session:
            # pull recent sets and study materials from session
            return # return sets and study materials
        else:
            return redirect(url_for('login')) # ideally hide study in header

@app.route('/profile', methods=['GET', 'POST'])
def profile():

    if request.method == "POST":
        # possiblities: press on pill ui sets, edit profile
        return 
    else:
        if 'active' in session:
            # pull profile data from session
            # add session
            return # profile data
        else:  
            return redirect('/')
        
    
@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == "POST":
        session.permanent = True
        session['active'] = True
        
        data = request.form
        username = data['username']
        session["user"]["username"] = username

        sqliteConnection = sqlite3.connect('login_DB.db')
        cursor = sqlite3.connect('nexus_DB.db')
        # check if username and password are in the database
        # if so:
        session["user"]["id"] = "id" # will need for sets table
        # else: 
            # return error
        sqliteConnection.close()


        sqliteConnection = sqlite3.connect('nexus_DB.db')
        cursor = sqliteConnection.cursor()

        # Grab session data with executions
        session["user"]["usertype"] = "usertype"
        session["user"]["description"] = "description"
        
        # Somehow get image from database
        session["user"]["profile_image"] = "image"
        
        # list of set objects, needs to be parsed, including last opened date
        session["sets"] = []

        sqliteConnection.close()

        return redirect(url_for('home'))
    else:
        if "active" in session:
            return redirect(url_for('home'))

@app.route('/add_new_user', methods=['GET', 'POST'])
def add_new_user():
    if request.method == "POST":
        data = request.form
        username = data["username"]
        password_hash = data["password_hash"]
        confirm_password_hash = data["confirm_password_hash"]
        try:
            sqliteConnection = sqlite3.connect('login_DB.db')
            cursor = sqliteConnection.cursor()
            print("Successfully Connected to SQLite")
            print(f"username: {username}")
            print(f"password_hash: {password_hash}")

            cursor.execute("INSERT INTO USERS (username, password_hash) VALUES (?, ?)", (username, password_hash))
            sqliteConnection.commit()
            print("Record inserted successfully into USERS table ", cursor.rowcount)
            cursor.close()

        #except sqlite3.Error as error:
            #print("Failed to insert data into sqlite table", error)
        finally:
            if sqliteConnection:
                sqliteConnection.close()
                print("The SQLite connection is closed")

        return redirect("/")
    else:
        return redirect("/")


if __name__ == '__main__':
    app.run(debug=True)

