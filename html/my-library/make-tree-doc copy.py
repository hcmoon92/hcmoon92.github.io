import os
import re

# Directory containing the Markdown files
directory = "./md_files"

# Function to parse filenames into a hierarchy
def parse_filenames(filenames):
    hierarchy = {}
    for filename in filenames:
        if filename.endswith(".md"):
            match = re.match(r"(\d{3})-([\w\-]+)\.md", filename)
            if match:
                order, name = match.groups()
                levels = name.split("-")
                current_level = hierarchy
                for level in levels:
                    if level not in current_level:
                        current_level[level] = {}
                    current_level = current_level[level]
                current_level["_file"] = filename  # Store the file link at the deepest level
    return hierarchy

# Recursive function to generate Markdown links
def generate_markdown(hierarchy, depth=0):
    markdown = ""
    for key, value in hierarchy.items():
        if key == "_file":  # Skip file keys, they're added as links
            continue
        indent = "  " * depth
        file_link = value.get("_file", f"{key}.md")
        markdown += f"{indent}- [{key.replace('-', ' ')}]({file_link})\n"
        markdown += generate_markdown(value, depth + 1)  # Recursively process subtopics
    return markdown

# Main function
def main():
    # Get all filenames in the directory
    filenames = os.listdir(directory)
    
    # Parse filenames into a hierarchy
    hierarchy = parse_filenames(filenames)
    
    # Generate Markdown
    markdown = "# Table of Contents\n" + generate_markdown(hierarchy)
    
    # Save the Markdown file
    with open("hierarchy.md", "w") as f:
        f.write(markdown)
    print("Hierarchy generated in 'hierarchy.md'.")

if __name__ == "__main__":
    main()