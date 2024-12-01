from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure the SQLite database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the User model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.name}>'

# Create the database
with app.app_context():
    db.create_all()

@app.route('/', methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        # Get the form data
        name = request.form.get('name')
        email = request.form.get('email')

        # Create a new user instance
        new_user = User(name=name, email=email)

        # Add the user to the database
        db.session.add(new_user)
        db.session.commit()

        # Redirect to the success page
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
