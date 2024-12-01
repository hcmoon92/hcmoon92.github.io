
To integrate Nix, Grafana, and Prometheus using Docker, you can create a setup where Nginx serves your application, Prometheus scrapes metrics from Nginx, and Grafana visualizes these metrics. Below are the step-by-step instructions to create this setup using Docker.

Step 1: Prepare the Bootstrap Dashboard
Create Your Bootstrap Dashboard:

Create a simple HTML file (e.g., index.html) that uses Bootstrap. You can save this file in a directory that will be mounted to the Nginx container.
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Dashboard</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1>My Bootstrap Dashboard</h1>
        <p>Welcome to the dashboard!</p>
    </div>
</body>
</html>
```

Create a directory for your dashboard files:

```bash
mkdir -p ~/nginx-dashboard
mv index.html ~/nginx-dashboard/
```

Step 2: Set Up Nginx with Docker
Create a Dockerfile for Nginx (optional, but recommended for customization):

```Dockerfile
# ~/nginx-dashboard/Dockerfile
FROM nginx:alpine

COPY ./index.html /usr/share/nginx/html/index.html

# Enable the stub status module
RUN echo "server { \
        listen 80; \
        location /nginx_status { \
            stub_status on; \
            allow 127.0.0.1; \
            deny all; \
        } \
    }" > /etc/nginx/conf.d/status.conf
```

Build the Nginx Docker Image:

```bash
cd ~/nginx-dashboard
docker build -t nginx-dashboard .
```

Run the Nginx Container:

```bash
docker run -d \
    --name nginx-dashboard \
    -p 80:80 \
    nginx-dashboard
```

Step 3: Set Up Prometheus
Create a prometheus.yml Configuration File:

Create a file named prometheus.yml in your home directory (or anywhere you prefer).

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'nginx'
    static_configs:
      - targets: ['host.docker.internal:80']  # Target Nginx running on the host
    metrics_path: /nginx_status
```

Run Prometheus using Docker:

```bash
docker run -d \
    --name prometheus \
    -p 9090:9090 \
    -v ~/prometheus.yml:/etc/prometheus/prometheus.yml \
    prom/prometheus
```

Step 4: Set Up Grafana
Run Grafana using Docker:

```bash
docker run -d \
    --name=grafana \
    -p 3000:3000 \
    grafana/grafana
```

Access Grafana:

Open your browser and navigate to http://localhost:3000. Log in with the default credentials (admin / admin).

Add Prometheus as a Data Source:

Go to Configuration (gear icon) > Data Sources > Add data source.
Select Prometheus.
Set the URL to http://prometheus:9090 (or http://localhost:9090 if running locally).
Click Save & Test to verify the connection.
Create a Dashboard:

Click Create (plus icon) > Dashboard.
Click Add new panel.
Use the query nginx_connections_active to visualize active connections or any other Nginx metrics.
Customize the panel as needed and save the dashboard.