import os
import re

# 기본 데이터 템플릿
template = """---
layout: post
title: "{title}"
#date: {date}
categories: [news]
tags: []
---

"""

# 디렉토리 경로
base_dir = "ai-today"

# 파일 처리 함수
def process_files(base_dir):
    for root, _, files in os.walk(base_dir):
        for file in files:
            print(file)
            # d2-d2-d2 형식의 파일 이름 스킵
            if re.match(r"\d{2}-\d{2}-\d{2}-.*\.txt", file):
                print(f"Skipping file: {file}")
                continue
            file_path = os.path.join(root, file)
            process_file(file_path)

# 파일 수정 함수
def process_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 원본 게시일 추출
    match = re.search(r"원본 게시일:\s(\d{4})년\s(\d{1,2})월\s(\d{1,2})일", content)
    if match:
        year = match.group(1)
        month = match.group(2).zfill(2)  # 두 자리로 보장
        day = match.group(3).zfill(2)    # 두 자리로 보장
        formatted_date = f"{year}-{month}-{day}"
        print(f"{formatted_date}-{file_path}")
        new_filename = f"{formatted_date}-{file_path}"
    else:
        formatted_date = "    -  -  "
        print(f"원본 게시일을 찾을 수 없습니다: {file_path}")
        new_filename = file_path

    # "layout: post" 확인
    if "---\nlayout: post" in content:
        print(f"Skipping file (already processed): {file_path}")
        return


    
    # 제목 추출
    match = re.search(r"#\s(.*?)\n", content)
    if match:
        title = match.group(1)
    else:
        print(f"제목을 찾을 수 없습니다: {file_path}")
        return
    
    # 템플릿 생성
    header = template.format(title=title, date=formatted_date, original_date=original_date)
    


# 파일 처리 함수
def rename_files(base_dir):
    for root, _, files in os.walk(base_dir):
        for file in files:
            print(file)
            # d2-d2-d2 형식의 파일 이름 스킵
            if re.match(r"\d{2}-\d{2}-\d{2}-.*\.txt", file):
                print(f"Skipping file: {file}")
                continue
            file_path = os.path.join(root, file)
            rename_file(file_path)
            #remove_date_from_file(file_path)

# 파일 수정 함수
def rename_file(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # 원본 게시일 추출
    match = re.search(r"원본 게시일:\s(\d{4})년\s(\d{1,2})월\s(\d{1,2})일", content)
    if match:
        year = match.group(1)[2:]  # 마지막 두 자리만 추출
        month = match.group(2).zfill(2)  # 두 자리로 보장
        day = match.group(3).zfill(2)    # 두 자리로 보장
        formatted_date = f"{year}-{month}-{day}"
        print(f"Formatted date: {formatted_date} extracted from {file_path}")
        new_filename = f"{formatted_date}-{os.path.basename(file_path)}"
    else:
        print(f"원본 게시일을 찾을 수 없습니다: {file_path}")
        new_filename = f"unknown_date-{os.path.basename(file_path)}"
    
    # 기존 파일 이름 변경
    directory = os.path.dirname(file_path)
    new_file_path = os.path.join(directory, new_filename)

    # Skip if a file with the same starting name already exists
    if any(existing_file.startswith(new_filename.split('.')[0]) for existing_file in os.listdir(directory)):
        print(f"Skipping: A file starting with '{new_filename.split('.')[0]}' already exists in {directory}")
        return

    if os.path.exists(file_path):
        os.rename(file_path, new_file_path)
        print(f"Renamed: {file_path} -> {new_file_path}")
    else:
        print(f"File not found: {file_path}")

def remove_date_from_file(file_path):
    # Extract the directory and base name
    directory = os.path.dirname(file_path)
    base_name = os.path.basename(file_path)
    
    # Pattern to match the date prefix in the format YY-MM-DD-
    match = re.match(r"^\d{2}-\d{2}-\d{2}-(.+)", base_name)
    if match:
        # Remove the date prefix
        new_base_name = match.group(1)
        new_file_path = os.path.join(directory, new_base_name)
        
        if os.path.exists(file_path):
            os.rename(file_path, new_file_path)
            print(f"Renamed: {file_path} -> {new_file_path}")
        else:
            print(f"File not found: {file_path}")
    else:
        print(f"No date prefix found in filename: {file_path}")


# 실행
rename_files(base_dir)
process_files(base_dir)
