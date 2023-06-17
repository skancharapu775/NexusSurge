import requests
import keys
import urllib.parse
# pip install scrapingbee
from scrapingbee import ScrapingBeeClient

card_url = "https://quizlet.com/27462182/econ-unit-1-flash-cards/"
text_data_name = "quizlet_page.txt"

def scrape_content(url):
    client = ScrapingBeeClient(api_key=keys.BEEAPI_KEY)
    response = client.get(url)

    # print('Response HTTP Status Code: ', response.status_code)
    # print('Response HTTP Response Body: ', response.content)

    return response.content

def store_data(filename, content):
    with open(filename, "w") as text_file:
        string_html = content.decode('utf-8')
        text_file.write(string_html)
    
    return string_html

html_content = scrape_content(card_url)
string_html = store_data(text_data_name, html_content)

print(string_html)





