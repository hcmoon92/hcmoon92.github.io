import csv

if __name__ == "__main__":

    # Path to your CSV file
    csv_file_path = 'data.csv'

    # Open the CSV file
    with open(csv_file_path, mode='r') as file:
        # Create a CSV reader object
        csv_reader = csv.reader(file)

        # Iterate over each row in the CSV file
        for row in csv_reader:
            # Print each row
            print(row)