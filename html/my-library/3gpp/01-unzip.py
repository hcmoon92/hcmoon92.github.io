import argparse
import zipfile
import os

def unzip_file(zip_file_path, extract_to_path):
    """
    Unzips the specified zip file into the target directory.
    """
    # Ensure the output directory exists
    os.makedirs(extract_to_path, exist_ok=True)
    
    # Extract the zip file
    with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to_path)
    print(f"Files extracted to: {extract_to_path}")

def main():
    # Create the argument parser
    parser = argparse.ArgumentParser(description="Unzip a .zip file")
    parser.add_argument("zip_file", help="Path to the .zip file")
    parser.add_argument(
        "--output",
        "-o",
        default="extracted_files",
        help="Directory to extract files to (default: 'extracted_files')",
    )
    
    # Parse the arguments
    args = parser.parse_args()
    
    # Validate the zip file
    if not zipfile.is_zipfile(args.zip_file):
        print(f"Error: {args.zip_file} is not a valid zip file.")
        return
    
    # Unzip the file
    unzip_file(args.zip_file, args.output)

if __name__ == "__main__":
    main()
