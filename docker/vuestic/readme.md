Clone the Vuestic Admin Dashboard:

```bash
git clone https://github.com/epicmaxco/vuestic-admin.git
cd vuestic-admin
```

Create a Dockerfile to build and serve the dashboard with Nginx.

Build the Docker image:

```bash
docker build -t vuestic-dashboard .
```
Run the container:

```bash
docker run -d -p 8080:80 --name vuestic-dashboard vuestic-dashboard
```

Access the dashboard via http://localhost:8080.

