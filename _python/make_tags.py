import os
import re
import yaml

posts_folder = "../_posts"
base_url = "/tags/"  # 태그 페이지 기본 URL

# 모든 포스트 파일 업데이트
for filename in os.listdir(posts_folder):
    if filename.endswith(".md"):
        file_path = os.path.join(posts_folder, filename)
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
                
                # 태그 링크 추가
                updated_content = re.sub(
                    r"(---.*?---)", 
                    r"\1\nTags: " + tag_links,
                    content, 
                    flags=re.DOTALL
                )

                # 파일 업데이트
                with open(file_path, "w", encoding="utf-8") as file:
                    file.write(updated_content)

print("Tags linked successfully!")