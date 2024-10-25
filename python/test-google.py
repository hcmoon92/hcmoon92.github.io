from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Initialize the Chrome driver
driver = webdriver.Chrome()

try:
    # Open a webpage
    driver.get("https://www.google.com")
    print("Opened Google")

    # Find the search box element by name attribute
    search_box = driver.find_element(By.NAME, "q")

    # Enter a search query and hit ENTER
    search_box.send_keys("Selenium Python")
    search_box.send_keys(Keys.RETURN)
    print("Search executed")

    # Wait for results to load
    time.sleep(2)

    # Get the first search result
    first_result = driver.find_element(By.CSS_SELECTOR, "h3")
    print("First result title:", first_result.text)

    # Optionally click the first result
    first_result.click()
    print("Clicked on the first result")

    # Pause to observe
    time.sleep(5)

finally:
    # Close the browser
    driver.quit()
    print("Browser closed")
