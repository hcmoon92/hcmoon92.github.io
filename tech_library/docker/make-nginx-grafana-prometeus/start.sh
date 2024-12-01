# Step 2: Set Up Nginx
docker run -d -p 80:80 --name nginx-dashboard-container nginx-dashboard
# Step 3: Set Up Prometheus
docker run -d --name prometheus -p 9090:9090 -v ./prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus
# Step 4: Set Up Grafana
docker run -d --name=grafana -p 3000:3000 grafana/grafana
