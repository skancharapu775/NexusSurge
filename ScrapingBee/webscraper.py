import requests
import keys
import urllib.parse
# pip install scrapingbee
from scrapingbee import ScrapingBeeClient

card_url = "https://quizlet.com/27462182/econ-unit-1-flash-cards/"
# card_url = "https://www.brainscape.com/flashcards/lecture-22-finishing-cost-curves-and-sta-10180242/packs/17828306"
# card_url = "https://quizlet.com/201826054/spanish-spanish-flash-cards/"


text_data_name = "quizlet_page.txt"

def scrape_content(url):
    client = ScrapingBeeClient(api_key=keys.BEEAPI_KEY)
    response = client.get(url)

    # print('Response HTTP Status Code: ', response.status_code)
    # print('Response HTTP Response Body: ', response.content)

    return response.content

def store_data(filename, content):
    with open(filename, "wb") as text_file:
        text_file.write(content)

def get_data(filename):
    with open(filename, "rb") as text_file:
        html_content = text_file.read()
    return html_content

def parse_quizlet(card_url):
    # Precedes every term and definition: <span class="TermText notranslate lang-en">
    # <br> means new line
    before_phrase = '<span class="TermText notranslate lang-en">'
    after_term_phrase = '</span></a></div></div><div class="SetPageTerm-side SetPageTerm-largeSide">'
    after_term_def = '</span>'

    # html_content = get_data("quizlet_page.txt")
    html_content = scrape_content(card_url)
    string_content = html_content.decode('utf-8')

    first_index = string_content.find(before_phrase)
    string_content = string_content[first_index:]

    terms = []
    definitions = []

    loop_index = 0

    while (loop_index != -1):
        term_start = loop_index + len(before_phrase)
        term_end = string_content.find(after_term_phrase, term_start)

        term = string_content[term_start:term_end]
        terms.append(term)
        
        def_start = string_content.find(before_phrase, term_end + len(after_term_phrase)) + len(before_phrase)
        def_end = string_content.find(after_term_def, def_start)

        definition = string_content[def_start:def_end]
        definitions.append(definition)

        loop_index = string_content.find(before_phrase, def_end)

    return terms, definitions

def parse_brain():

    html_content = get_data("brain_page.txt")
    string_content = html_content.decode('utf-8')
    
    return string_content

# html_content = scrape_content(card_url)
# store_data(text_data_name, html_content)

terms, definitions = parse_quizlet(card_url)

print(terms)
print(definitions)




