import os
import yaml

# _posts 폴더 경로
posts_folder = "../_posts"
# tags 폴더 경로
tags_folder = "../tags"

# tags 폴더가 없으면 생성
os.makedirs(tags_folder, exist_ok=True)

# 모든 태그를 저장할 세트
all_tags = set()

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
            tags = front_matter.get("tags", [])
            all_tags.update(tags)

# 태그별 페이지 생성
for tag in all_tags:
    # '/'와 공백을 '-'로 변환
    sanitized_tag = tag.replace("/", "-").replace(" ", "-")
    tag_filename = f"{sanitized_tag}.md"
    tag_page_path = os.path.join(tags_folder, tag_filename)

    # 페이지 생성 및 내용 작성
    with open(tag_page_path, "w", encoding="utf-8") as tag_file:
        tag_file.write(f"""---
layout: tag
title: "{tag.capitalize()}"
tag: "{tag}"
permalink: /tags/{sanitized_tag}/
---
<h1>Posts tagged with "{tag.capitalize()}"</h1>
<ul>
  {{% for post in site.posts %}}
    {{% if post.tags contains page.tag %}}
      <li>
        <a href="{{{{ post.url | relative_url }}}}">{{{{ post.title }}}}</a>
        <span>{{{{ post.date | date: "%B %d, %Y" }}}}</span>
      </li>
    {{% endif %}}
  {{% endfor %}}
</ul>
""")

print(f"Tag pages generated for {len(all_tags)} tags.")
