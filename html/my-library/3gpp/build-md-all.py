import os
import subprocess

# Path to the folder containing your .md files
folder_path = 'extracted_files'  # Adjust this to your folder path

# Find all .md files in the folder
docx_files = [f for f in os.listdir(folder_path) if f.endswith('.docx')]

# Check if there are any .md files
if not docx_files:
    print("No .docx files found in the folder.")
else:
    for docx_file in docx_files:
        docx_file_path = os.path.join(folder_path, docx_file)
        
        # Run test.py for each .md file
        print(f"Running for {docx_file_path}")
        
        # Use subprocess to run test.py (pass the markdown file as an argument)
        #subprocess.run(['python', 'add_marp_markdown.py', md_file_path])

        # Use subprocess to run test.py (pass the markdown file as an argument)
        subprocess.run(['python', '03-reader.py', docx_file_path])

    print("All python have been run.")
