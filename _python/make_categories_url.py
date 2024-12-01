import os
import yaml

# _posts 폴더 경로
posts_folder = "../_posts"
# categories 폴더 경로
categories_folder = "../categories"

# categories 폴더가 없으면 생성
os.makedirs(categories_folder, exist_ok=True)

# 모든 태그를 저장할 세트
all_categories = set()

# _posts 폴더 및 서브디렉토리의 모든 파일 처리
for root, _, files in os.walk(posts_folder):
    for filename in files:
        if filename.endswith(".md"):
            file_path = os.path.join(root, filename)
            with open(file_path, "r", encoding="utf-8") as file:
                content = file.read()

        # YAML Front Matter 추출
        if content.startswith("---"):
            end_index = content.find("---", 3)  # 두 번째 --- 찾기
            yaml_content = content[3:end_index]
            front_matter = yaml.safe_load(yaml_content)
            categories = front_matter.get("categories", [])
            all_categories.update(categories)

# 각 태그에 대해 페이지 생성
for category in all_categories:
    sanitized_category = category.replace("/", "-").replace(" ", "-")
    category_filename = f"{sanitized_category}.md"  # 공백을 하이픈으로 변환
    category_page_path = os.path.join(categories_folder, category_filename)
    with open(category_page_path, "w", encoding="utf-8") as category_file:
        category_file.write(f"""---
layout: category
title: "{category.capitalize()}"
category: "{category}"
permalink: /categories/{category.replace(' ', '-')}/
---
<h1>Posts categoryged with "{category.capitalize()}"</h1>
<ul>
  {{% for post in site.posts %}}
    {{% if post.categories contains page.category %}}
      <li>
        <a href="{{{{ post.url | relative_url }}}}">{{{{ post.title }}}}</a>
        <span>{{{{ post.date | date: "%B %d, %Y" }}}}</span>
      </li>
    {{% endif %}}
  {{% endfor %}}
</ul>
""")

print(f"category pages generated for {len(all_categories)} categories.")
