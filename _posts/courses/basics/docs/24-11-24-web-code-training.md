---
layout: post
title: "training"
#date: 2024-11-23
categories: [course]
tags: [web, python]
---

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

--

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


--

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


--

# Bootstrap Dashboard Admin
## bootstrap-dashboard / 
```
bootstrap-dashboard/
    ├── start.sh
    └── Dockerfile
```

```Dockerfile
# Use the official Nginx image as the base image
FROM nginx:alpine

# Set working directory to /usr/share/nginx/html (the default directory where Nginx serves files)
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the static Bootstrap Dashboard files from your host machine to the container
COPY ./ .

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

- build / deploy
  
```bash
cd bootstrap-dashboard
docker build -t bootstrap-dashboard .
docker run -d -p 8080:80 --name bootstrap-dashboard-container bootstrap-dashboard
```


--

- nginx-dashboard
```Dockerfile
# Use the official Nginx image as the base image
FROM nginx:alpine

# Set working directory to /usr/share/nginx/html (the default directory where Nginx serves files)
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the static Bootstrap Dashboard files from your host machine to the container
COPY ./ .

# Enable the stub status module
RUN echo "server { \
        listen 80; \
        location /nginx_status { \
            stub_status on; \
            allow 127.0.0.1; \
            deny all; \
        } \
    }" > /etc/nginx/conf.d/status.conf

# Expose port 80 to the host machine
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```

--

```bash
# Step 1: Create Bootstrap Dashboard
mkdir -p ~/nginx-dashboard
# Create index.html with Bootstrap content

# Step 2: Set Up Nginx
cd ~/nginx-dashboard
# Create Dockerfile and build the image
docker build -t nginx-dashboard .


docker run -d --name nginx-dashboard -p 80:80 nginx-dashboard

# Step 3: Set Up Prometheus
# Create prometheus.yml with Nginx scrape config
docker run -d --name prometheus -p 9090:9090 -v ~/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus

# Step 4: Set Up Grafana
docker run -d --name=grafana -p 3000:3000 grafana/grafana

```

prometheus.yml
```yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'nginx'
    static_configs:
      - targets: ['host.docker.internal:80']  # Target Nginx running on the host
    metrics_path: /nginx_status
```

--

- selenium

 Create a Lightweight Selenium Standalone with Headless Chromium

Dockerfile for Headless Chromium
```Dockerfile
# Use a small base image
FROM python:3.9-slim

# Install dependencies
RUN apt-get update && \
    apt-get install -y chromium chromium-driver && \
    pip install selenium

# Set environment variables for headless Chrome
ENV CHROME_BIN=/usr/bin/chromium \
    CHROMEDRIVER_PATH=/usr/bin/chromedriver

# Copy the test script into the container
COPY test_script.py /app/test_script.py
WORKDIR /app

# Command to run the Selenium test with headless Chromium
CMD ["python", "test_script.py"]
```

--

Sample test_script.py
```python
# test_script.py
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

def test_demoqa():
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")  # Run headless (no GUI)
    options.add_argument("--disable-gpu")
    options.add_argument("--no-sandbox")  # Required in Docker
    options.add_argument("--disable-dev-shm-usage")  # Bypass memory issues
    driver = webdriver.Chrome(executable_path='/usr/bin/chromedriver', options=options)

    try:
        driver.get("https://demoqa.com/")
        time.sleep(2)

        # Example: Click on 'Elements' card
        elements_section = driver.find_element(By.XPATH, "//div[@class='card'][1]//div[@class='card-body']")
        elements_section.click()

        # Check URL to ensure navigation succeeded
        assert "elements" in driver.current_url

    finally:
        driver.quit()

if __name__ == "__main__":
    test_demoqa()
```
--

Build and Run the Container
Build the Docker image with the custom Dockerfile:

```bash
docker build -t selenium-headless-chromium .
```

Run the container:

```bash
docker run --rm selenium-headless-chromium
```
---

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the Chrome driver
driver = webdriver.Chrome()

try:
    # Open a webpage
    driver.get("https://www.google.com")
    print("Opened Google")

    # Find the search box element by name attribute
    search_box = driver.find_element(By.NAME, "q")

    # Enter a search query and hit ENTER
    search_box.send_keys("Selenium Python")
    search_box.send_keys(Keys.RETURN)
    print("Search executed")

    # Wait for results to load
    time.sleep(2)

    # Get the first search result
    first_result = driver.find_element(By.CSS_SELECTOR, "h3")
    print("First result title:", first_result.text)

    # Optionally click the first result
    first_result.click()
    print("Clicked on the first result")

    # Pause to observe
    time.sleep(5)

finally:
    # Close the browser
    driver.quit()
    print("Browser closed")
```

```bash
pip install selenium
```

```bash
python test-google.py
```


---
Playwright Test Script

```javascript
const { chromium } = require('playwright');

(async () => {
  // Launch a Chromium browser
  const browser = await chromium.launch({ headless: false }); // Set to 'true' for headless mode
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Open Google
    await page.goto('https://www.google.com');
    console.log('Opened Google');

    // Find the search box element by name attribute and enter a search query
    await page.fill('input[name="q"]', 'Selenium Python');
    await page.keyboard.press('Enter');
    console.log('Search executed');

    // Wait for results to load
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Get the first search result
    const firstResult = await page.locator('h3').first();
    const firstResultTitle = await firstResult.textContent();
    console.log('First result title:', firstResultTitle);

    // Optionally click the first result
    await firstResult.click();
    console.log('Clicked on the first result');

    // Pause to observe (optional)
    await page.waitForTimeout(5000); // Wait for 5 seconds
  } finally {
    // Close the browser
    await browser.close();
    console.log('Browser closed');
  }
})();
```

How This Script Works:
- Launches a Chromium browser: Opens a browser instance using Playwright in non-headless mode.
- Navigates to Google: Loads the Google homepage.
- Fills in the search box: Uses the fill method to enter "Selenium Python" into the search input box.
- Presses Enter: Simulates pressing the Enter key to execute the search.
- Waits for results to load: Uses waitForTimeout to wait for the search results to load.
- Retrieves the first search result: Locates the first h3 element and gets its text content.
- Clicks the first result: Optionally clicks on the first search result to navigate to that page.
- Pauses execution: Waits for a specified time to observe the results.
- Closes the browser: Ensures the browser is closed at the end.

Running the Script
To run this script, save it as google-search.js and execute it using Node.js:

```bash
npx playwright install
```

```bash
node google-search.js
```

