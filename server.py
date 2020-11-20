from flask import Flask, render_template, jsonify, request
import twint
import json

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('root.html')

@app.route('/api/get-tweets', methods = ["POST"] )
def return_tweets():
    data = request.get_json()
    print(data)
    c=twint.Config()
    print(data["username"],data["keyword"],data["min_date"],data["max_date"])
    c.Username = data["username"]
    c.Search = data["keyword"]
    c.Limit = data["number_results"]
    c.Since = data["min_date"]
    c.Until = data["max_date"]
    c.Store_json = True
    twint.run.Search(c)
    return jsonify("hi")

if __name__ == "__main__":
  # connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')