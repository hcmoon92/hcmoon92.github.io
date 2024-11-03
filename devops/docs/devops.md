https://shorturl.at/TE5zP

https://www.toptal.com/developers/gitignore

https://docs.github.com/ko/authentication/connecting-to-github-with-ssh



docker run -p 30120:8000 --name my-api-hcmoon92 ghcr.io/hcmoon92/my-app:latest


--
3. Container Image
Application을 배포할 수 있는 압축파일
docker build 명령어를 이용하여 파일생성
3-1. DockerFile
아래와 같이 작성. Multi-stage pattern을 이용하여, builder에서는 python package를 생성
# First stage: Build environment
FROM python:3.12-slim AS builder
WORKDIR /app

# Poetry 설치 및 종속성 빌드
RUN pip install poetry
COPY pyproject.toml poetry.lock ./

# 패키지 빌드
COPY . .
RUN poetry build -f wheel

# Second stage: Runtime environment
FROM python:3.12-slim
WORKDIR /app

# 빌드된 .whl 파일을 복사하고 설치
COPY --from=builder /app/dist/*.whl .
RUN pip install --no-cache-dir my_app-*.whl

# FastAPI 서버 실행
CMD ["uvicorn", "my_app.main:app", "--host", "0.0.0.0", "--port", "8000"]
​
3-2. docker build
아래를 참조하여 Dockerfile로 부터 container image build
docker build . -t ghcr.io/<USERNAME>/<PACKAGENAME>:latest
# ex) docker build . -t ghcr.io/seungbaeji/tta/my-app:latest
​
추후, Github Actions에서는 아래의 명령어를 활용하여 이미지 빌드
docker buildx build . \
  --platform linux/amd64,linux/arm64 \
  --push \
  -t ghcr.io/${{ github.actor }}/${{ env.PACKAGE }}/${{ env.PROJECT_DIR }}:latest
​
⚠️ NOTE: buildx 명령어를 이용하여 보통 진행. 
3-3. docker push
GitHub Container Registry에 container image 업로드시, 로그인 필요. 아래를 참고하여 로그인
docker login ghcr.io \
	-u <your-github-username> \
	-p <your-personal-access-token>
​
원하는 container image 이름으로 container image 업로드. 아래 명령어 참고
docker push docker.io/<username>/<package-name>:latest
# ex) docker push ghcr.io/seungbaeji/tta/my-app:latest
​
Login과 push 실행시, 아래화면과 같이 나타남

아래는 등록된 container image 화면

3-4. docker run
생성한 container image로 부터 container 실행. 아래 참고
docker run -p <host-port>:8000 \
	--name my-api \
  <image-name>

# docker run -p 30085:8000 --name my-api ghcr.io/seungbaeji/tta/my-app:latest
​
http://5.78.67.227:<host-port>/docs 주소로 접속

https://labs.play-with-docker.com/ 접속. Instance 생성 후, docker run 실행

docker login ghcr.io -u <username> -p <pat-token>
docker run -p 8000:8000 --name my-api <container-image-name>