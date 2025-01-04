from playwright.sync_api import sync_playwright
from urllib.parse import urlparse, parse_qs
import json


def get_video_id(url):
    # Parse the URL
    parsed_url = urlparse(url)
    # Extract the query parameters
    query_params = parse_qs(parsed_url.query)
    # Get the 'v' parameter which is the video ID
    video_id = query_params.get('v', [None])[0]
    return video_id


def fetch_youtube_playlist():
    playlist_url = "https://www.youtube.com/playlist?list=PLDIoUOhQQPlWt8OpaGG43OjNYuJ2q9jEN"

    playlist_data = {
        "playlists": [
            {
                "title": "Vevo 2024",
                "description": "Vevo Playlist 2024",
                "videos": []
            }
        ]
    }

    with sync_playwright() as p:
        # Launch browser in headless mode
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the playlist URL
        page.goto(playlist_url, timeout=60000)

        # Wait for videos to load
        page.wait_for_selector('a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer')

        # Extract video titles and links
        videos = page.query_selector_all('a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer')
        for video in videos:
            title = video.inner_text()
            link = video.get_attribute('href')
            video_id = get_video_id(link)

            # Append video data to the JSON structure
            playlist_data["playlists"][0]["videos"].append({
                "id": video_id,
                "title": title
            })

        # Close the browser
        browser.close()

    # Print the JSON output
    #print(json.dumps(playlist_data, indent=2))
    
    # Write JSON to file
    with open('playlist_data.json', 'w', encoding='utf-8') as json_file:
        json.dump(playlist_data, json_file, indent=2, ensure_ascii=False)

    print("JSON data has been written to 'playlist_data.json'.")

# Run the function
fetch_youtube_playlist()
