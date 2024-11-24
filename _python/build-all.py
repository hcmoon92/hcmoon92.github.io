import os
import subprocess

#subprocess.run(['python', 'make_tags.py'])
subprocess.run(['python', 'make_tags_url.py'])
#subprocess.run(['python', 'make_category.py'])
subprocess.run(['python', 'make_categories_url.py'])

print("All have been run.")
