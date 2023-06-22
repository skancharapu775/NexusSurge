from flask import Flask, redirect, url_for, request, session
from flask_cors import CORS
from datetime import timedelta
import sqlite3
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
        return 
    
# study materials
@app.route('/sets', methods=['GET', 'POST'])
def sets():

    if request.method == "POST":
        return    
    else:
        return 

# individual study option
@app.route('/study', methods=['GET', 'POST'])
def study():

    if request.method == "POST":
        return 
    else:
        return 

@app.route('/profile', methods=['GET', 'POST'])
def profile():

    if request.method == "POST":
        return 
    else:
        return
        
    
@app.route('/login', methods=['GET', 'POST'])
def login():

    if request.method == "POST":
        return 
    else:
        return 

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

