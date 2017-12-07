# install package with in code
import pip


def install(package):
    pip.main(['install', package])

# Example
if __name__ == '__main__':
    install('argh')

# flask CORS
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"