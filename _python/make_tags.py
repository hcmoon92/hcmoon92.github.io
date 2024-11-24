import os
import re
import yaml

posts_folder = "../_posts"
base_url = "/tags/"  # 태그 페이지 기본 URL

# _posts 폴더 및 서브디렉토리의 모든 파일 처리
for root, _, files in os.walk(posts_folder):
    for filename in files:
        if filename.endswith(".md"):
            file_path = os.path.join(root, filename)
            with open(file_path, "r", encoding="utf-8") as file:
                content = file.read()

        # YAML Front Matter 추출
        match = re.search(r"---(.*?)---", content, re.DOTALL)
        if match:
            yaml_header = match.group(1)
            front_matter = yaml.safe_load(yaml_header)
            tags = front_matter.get("tags", [])

            # 태그 링크 생성
            if tags:
                # 태그 링크 생성
                tag_links = " ".join([f"[#{tag}]({base_url}{tag.replace(' ', '-')}/)" for tag in tags])

                # 기존 Categories: 섹션 확인
                existing_tags_match = re.search(r"Tags: (.*)", content)
                if existing_tags_match:
                    existing_tags = existing_tags_match.group(1).strip()
                    
                    # 기존 링크와 동일하면 스킵
                    if existing_tags == tag_links:
                        print(f"Skipping file: {filename}, tags are already up-to-date.")
                        continue

                # 태그 링크 추가
                updated_content = re.sub(
                    r"(---.*?---)", 
                    r"\1\n\nTags: " + tag_links,
                    content, 
                    flags=re.DOTALL
                )

                # 파일 업데이트
                with open(file_path, "w", encoding="utf-8") as file:
                    file.write(updated_content)

print("Tags linked successfully!")