import os
import subprocess

# Path to the folder containing your .md files
folder_path = 'specs'  # Adjust this to your folder path

# Find all .md files in the folder
zip_files = [f for f in os.listdir(folder_path) if f.endswith('.zip')]

# Check if there are any .md files
if not zip_files:
    print("No .zipfiles found in the folder.")
else:
    for zip_file in zip_files:
        zip_file_path = os.path.join(folder_path, zip_file)
        
        # Run test.py for each .md file
        print(f"Running for {zip_file_path}")
        
        # Use subprocess to run test.py (pass the markdown file as an argument)
        #subprocess.run(['python', 'add_marp_markdown.py', md_file_path])

        # Use subprocess to run test.py (pass the markdown file as an argument)
        subprocess.run(['python', '01-unzip.py', zip_file_path])

    print("All python have been run.")
