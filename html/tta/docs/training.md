1. Install the required packages
```bash
pip install Flask SQLAlchemy flask_sqlalchemy pytest requests
```

1. Create the API with Flask and SQLite
app.py

```python
from flask import Flask, request, jsonify, abort
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Database model for User
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

# Initialize the database
with app.app_context():
    db.create_all()

# API to create a new user
@app.route('/users', methods=['POST'])
def create_user():
    data = request.json
    if not data or not data.get('username') or not data.get('email'):
        abort(400, description="Missing username or email")

    if User.query.filter_by(username=data['username']).first():
        abort(400, description="Username already exists")

    new_user = User(username=data['username'], email=data['email'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'id': new_user.id, 'username': new_user.username, 'email': new_user.email}), 201

# API to get user by ID
@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        abort(404, description="User not found")

    return jsonify({'id': user.id, 'username': user.username, 'email': user.email})

if __name__ == '__main__':
    app.run(debug=True)
```

3. Run the Flask API server
```bash
python app.py
```
This will start the Flask server at http://127.0.0.1:5000.

---

4. Test the API using Python and requests
Create a separate test file for the API.

test_api.py
```python
import requests

BASE_URL = "http://127.0.0.1:5000"

def test_create_user():
    payload = {"username": "testuser", "email": "testuser@example.com"}
    response = requests.post(f"{BASE_URL}/users", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["username"] == "testuser"
    assert data["email"] == "testuser@example.com"

def test_get_user():
    # Assuming user with ID 1 was created during test_create_user()
    response = requests.get(f"{BASE_URL}/users/1")
    assert response.status_code == 200
    data = response.json()
    assert data["username"] == "testuser"
    assert data["email"] == "testuser@example.com"

if __name__ == "__main__":
    test_create_user()
    test_get_user()
```

5. Running the tests
Run the tests with:

```bash
python test_api.py
```

This will:

- Send a POST request to create a user.
- Send a GET request to fetch the user by ID.
- You can also integrate this with pytest for structured testing:

```bash
pytest test_api.py
```
Summary:
- Flask is used for creating the API.
- SQLite is the database.
- requests is used to test the API endpoints.


---

Step 1: Create the Project Structure
Assuming you're starting fresh, here's how to structure your project:

```
flask_app/
    ├── app.py
    └── templates/
        ├── index.html
        └── success.html
```

Step 2: Create the Flask Application
app.py:

```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get the form data
        name = request.form.get('name')
        email = request.form.get('email')

        # Redirect to the success page with the user's data
        return redirect(url_for('success', name=name, email=email))

    return render_template('index.html')

@app.route('/success')
def success():
    # Get the name and email from the query parameters
    name = request.args.get('name')
    email = request.args.get('email')
    return render_template('success.html', name=name, email=email)

if __name__ == "__main__":
    app.run(debug=True)
```

Step 3: Create the HTML Templates
templates/index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Form</title>
</head>
<body>
    <h1>User Information Form</h1>
    <form method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br><br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```

templates/success.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Submission Successful</title>
</head>
<body>
    <h1>Form Submission Successful!</h1>
    <p>Name: {{ name }}</p>
    <p>Email: {{ email }}</p>
    <a href="/">Go back</a>
</body>
</html>
```

Step 4: Run the Application

```bash
python app.py
```