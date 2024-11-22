import os
import subprocess

# Path to the folder containing your .md files
folder_path = 'extracted_files'  # Adjust this to your folder path

# Find all .md files in the folder
doc_files = [f for f in os.listdir(folder_path) if f.endswith('.doc')]

# Check if there are any .md files
if not doc_files:
    print("No .doc files found in the folder.")
else:
    for doc_file in doc_files:
        doc_file_path = os.path.join(folder_path, doc_file)
        
        # Run test.py for each .md file
        print(f"Running for {doc_file_path}")
        
        # Use subprocess to run test.py (pass the markdown file as an argument)
        #subprocess.run(['python', 'add_marp_markdown.py', md_file_path])

        # Use subprocess to run test.py (pass the markdown file as an argument)
        subprocess.run(['python', '02-convert.py', doc_file_path])

    print("All python have been run.")
