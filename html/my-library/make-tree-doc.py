import os
import re
import shutil
import sys

# Directory containing the Markdown files
directory = "./md_files"

# Function to decode filenames from CP949 to UTF-8 (for Windows)
def decode_filename(filename):
    try:
        return filename.encode("latin1").decode("cp949")  # Decode CP949
    except (UnicodeEncodeError, UnicodeDecodeError):
        return filename  # If decoding fails, use the original

def slugify(text):
    """Convert text into a slug-friendly format."""
    text = text.strip().lower()
    text = re.sub(r"[^\w\s-]", "", text)  # Remove non-alphanumeric characters
    text = re.sub(r"[\s]+", "_", text)   # Replace spaces with hyphens
    return text

def rename_files_from_titles():
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            file_path = os.path.join(directory, filename)
            
            # Open the file and find the title line
            with open(file_path, "r", encoding="utf-8") as f:
                for line in f:
                    if line.startswith("#"):  # Title line found
                        title = line.lstrip("#").strip()  # Extract title text
                        break
                else:
                    print(f"No title found in: {filename}")
                    continue
            
            # Extract the original prefix from the filename
            match = re.match(r"(\d{3}-[\w\-]+-)", filename)
            if match:
                prefix = match.group(1)  # Extract prefix (e.g., "000-5g-overview-")
            else:
                print(f"Invalid filename format: {filename}")
                continue
            
            # Generate a new filename
            new_filename = f"{prefix}{slugify(title)}.md"
            new_file_path = os.path.join(directory, new_filename)
            
            # Rename the file
            os.rename(file_path, new_file_path)
            print(f"Renamed: '{filename}' -> '{new_filename}'")
            
# Function to move files into directories based on main topic
def organize_files():
    for filename in os.listdir(directory):
        decoded_filename = decode_filename(filename)
        if decoded_filename.endswith(".md"):
            
            # Match the filename and main + topic
            # match = re.match(r"(\d{3})-([\w\-]+)-([\w\-_]+)\.md", decoded_filename)
            # Match the filename and extract the main topic
            match = re.match(r"(\d{3})-([\w]+)[\-_]", decoded_filename)            
            if match:
                main_topic = match.group(2)
                target_dir = os.path.join(directory, main_topic)
                os.makedirs(target_dir, exist_ok=True)  # Create target directory if it doesn't exist
                
                # Move the file
                src_path = os.path.join(directory, filename)
                dest_path = os.path.join(target_dir, filename)
                shutil.move(src_path, dest_path)
                print(f"Moved: '{filename}' -> '{dest_path}'")

# Function to rename files (replace spaces with underscores)
def rename_files():
    for root, _, files in os.walk(directory):
        for filename in files:
            original_filename = decode_filename(filename)
            new_filename = original_filename.replace(" ", "_")
            if new_filename != original_filename:
                os.rename(os.path.join(root, filename), os.path.join(root, new_filename))
                print(f"Renamed: '{original_filename}' -> '{new_filename}'")

# Function to parse filenames into a hierarchy
def parse_filenames():
    hierarchy = {}
    for root, _, files in os.walk(directory):
        for filename in files:
            decoded_filename = decode_filename(filename)
            if decoded_filename.endswith(".md"):
                match = re.match(r"(\d{3})-([\w\-]+)\.md", decoded_filename)
                if match:
                    _, name = match.groups()
                    levels = name.split("-")
                    current_level = hierarchy
                    for level in levels:
                        if level not in current_level:
                            current_level[level] = {}
                        current_level = current_level[level]
                    current_level["_file"] = os.path.join(root, filename)  # Store the file path
    return hierarchy

# Recursive function to generate Markdown links
def generate_markdown(hierarchy, depth=0):
    markdown = ""
    for key, value in hierarchy.items():
        if key == "_file":  # Skip file keys, they're added as links
            continue
        indent = "  " * depth
        display_key = key.replace("_", " ")  # Convert underscores back to spaces for display
        if "_file" in value:  # Add a link only for the deepest level
            file_path = value["_file"].replace("\\", "/")  # Ensure POSIX paths for Markdown
            markdown += f"{indent}- [{display_key}]({file_path})\n"
        else:
            markdown += f"{indent}- {display_key}\n"
        markdown += generate_markdown(value, depth + 1)  # Recursively process subtopics
    return markdown

# Main function
def main():
    
    rename_files_from_titles()
    
    # Step 1: Organize files into directories by main topic
    #organize_files()

    # Step 2: Rename files (replace spaces with underscores)
    #rename_files()

    # Step 3: Parse filenames into a hierarchy
    hierarchy = parse_filenames()

    # Step 4: Generate Markdown
    markdown = "# Table of Contents\n" + generate_markdown(hierarchy)

    # Step 5: Save the Markdown file
    with open("hierarchy.md", "w", encoding="utf-8") as f:
        f.write(markdown)
    print("Hierarchy generated in 'hierarchy.md'.")

if __name__ == "__main__":
    main()
