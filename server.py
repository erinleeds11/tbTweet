from flask import Flask, render_template, jsonify, request
import twint

app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('root.html')

if __name__ == "__main__":
  # connect_to_db(app)
    app.run(debug=True, host='0.0.0.0')