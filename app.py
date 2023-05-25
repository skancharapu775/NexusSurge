from flask import Flask, request, send_file
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

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

# default page
@app.route('/home', methods=['GET', 'POST'])
def home ():

    if request.method == 'POST':

        return 

    if request.method == 'GET':
        return
    
# study materials
@app.route('/materials', methods=['GET', 'POST'])
def materials ():

    if request.method == "POST":
        return 
      
    if request.method == "GET":
        return 

# individual study option
@app.route('/study', methods=['GET', 'POST'])
def study ():

    if request.method == "POST":
        return 
      
    if request.method == "GET":
        return 



if __name__ == '__main__':
    app.run(debug=True)