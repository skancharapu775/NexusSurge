import requests
import keys
import urllib.parse
# pip install scrapingbee
from scrapingbee import ScrapingBeeClient

card_url = "https://quizlet.com/27462182/econ-unit-1-flash-cards/"
text_data_name = "quizlet_output.txt"

def scrape_content(url):
    client = ScrapingBeeClient(api_key=keys.BEEAPI_KEY)
    response = client.get(url)

    # print('Response HTTP Status Code: ', response.status_code)
    # print('Response HTTP Response Body: ', response.content)

    return response.content

html_content = scrape_content(card_url)

def store_data(filename, content):
    with open(filename, "w") as text_file:
        text_file.write(content)

html_content = scrape_content(card_url)
# store_data(text_data_name, html_content)





