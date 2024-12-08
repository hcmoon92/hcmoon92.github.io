from playwright.sync_api import sync_playwright

def open_url(text, source_lang="en", target_lang="ko"):
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Google Translate
        url = f"https://www.metmuseum.org/art/collection/search/23465"
        page.goto(url)

        # Enter the text to translate
        textarea = page.locator("textarea[aria-label='Source text']")
        textarea.fill(text)

        # Wait for the translation to appear
        page.wait_for_selector("span[jsname='W297wb']", timeout=10000)

        # Retrieve the translated text
        result = page.locator("span[jsname='W297wb']").all_inner_texts()
        translated_text = " ".join(result)

        # Close the browser
        browser.close()

        return translated_text

# Example usage
if __name__ == "__main__":
    source_text = "Hello, how are you?"
    translated = translate_text(source_text, source_lang="en", target_lang="ko")
    print(f"Translated text: {translated}")
