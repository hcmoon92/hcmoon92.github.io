import os
import sys
import win32com.client

def convert_doc_to_docx(input_path, output_path):
    try:
        # Start Microsoft Word
        word = win32com.client.Dispatch("Word.Application")
        word.Visible = False
        
        # Open the .doc file
        doc = word.Documents.Open(input_path)
        
        # Save as .docx
        doc.SaveAs(output_path, FileFormat=16)  # 16 = wdFormatXMLDocument
        doc.Close()
        word.Quit()
        
        print(f"Successfully converted '{input_path}' to '{output_path}'")
    except Exception as e:
        print(f"An error occurred: {e}")

def main():
    if len(sys.argv) != 2:
        print("Usage: python convert.py <input.doc>")
        return
    
    input_path = sys.argv[1]
    output_path = input_path
    
    # Ensure paths are absolute
    input_path = os.path.abspath(input_path)
    output_path = os.path.abspath(input_path.rsplit(".", 1)[0] + ".docx")
    
    convert_doc_to_docx(input_path, output_path)

if __name__ == "__main__":
    main()