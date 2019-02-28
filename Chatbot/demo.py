from flask import Flask

app = Flask(__name__)
@app.route('/')
def hello():
	return "Hello"

@app.route('/a')
def receive_message():
    return "A"

@app.route('/b')
def receive_message_new():
	return "B"

if __name__ == '__main__':
    app.run()