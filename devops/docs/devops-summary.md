```bash
docker login ghcr.io \
	-u <your-github-username> \
	-p <your-personal-access-token>
```

```bash
docker build . -t ghcr.io/<USERNAME>/<PACKAGENAME>:latest
docker push ghcr.io/<username>/<package-name>:latest
```

```bash
docker build . -t ghcr.io/hcmoon92/mydevops:latest
docker push ghcr.io/hcmoon92/mydevops:latest
docker pull ghcr.io/hcmoon92/mydevops:latest
```