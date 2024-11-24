import os
import re
import yaml

posts_folder = "../_posts"
base_url = "/categories/"  # 카테고리 페이지 기본 URL

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
            categories = front_matter.get("categories", [])

            if categories:
                # 카테고리 링크 생성
                category_links = " ".join([f"[/{category}]({base_url}{category.replace(' ', '-')}/)" for category in categories])
                
                # 기존 Categories: 섹션 확인
                existing_categories_match = re.search(r"Categories: (.*)", content)
                if existing_categories_match:
                    existing_categories = existing_categories_match.group(1).strip()
                    
                    # 기존 링크와 동일하면 스킵
                    if existing_categories == category_links:
                        print(f"Skipping file: {filename}, categories are already up-to-date.")
                        continue
                
                # 카테고리 링크 추가
                updated_content = re.sub(
                    r"(---.*?---)", 
                    r"\1\n\nCategories: " + category_links,
                    content, 
                    flags=re.DOTALL
                )

                # 파일 업데이트
                with open(file_path, "w", encoding="utf-8") as file:
                    file.write(updated_content)

print("Categories linked successfully!")
