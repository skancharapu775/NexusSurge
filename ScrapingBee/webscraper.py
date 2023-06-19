import keys
from scrapingbee import ScrapingBeeClient
# pip install scrapingbee


# card_url = "https://quizlet.com/27462182/econ-unit-1-flash-cards/"
# card_url = "https://www.brainscape.com/flashcards/lecture-22-finishing-cost-curves-and-sta-10180242/packs/17828306"
card_url = "https://quizlet.com/201826054/spanish-spanish-flash-cards/"

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
    # Precedes every term and definition: <span class="TermText notranslate
    # <br> means new line

    # Pattern of phrases before 
    before_phrase = '<span class="TermText notranslate'
    before_char = '>'

    after_term_phrase = '</span></a></div></div><div class="SetPageTerm-side SetPageTerm-largeSide">'
    after_term_def = '</span>'

    # html_content = get_data("quizlet_page.txt") 

    # Get html data from given_url
    html_content = scrape_content(card_url) 

    # Convert data to string
    string_content = html_content.decode('utf-8') 

    first_index = string_content.find(before_phrase)
    string_content = string_content[first_index:]

    # Store terms and definitions in lists
    terms = []
    definitions = []

    loop_index = 0

    # Until the preceding pattern is no longer found
    while (loop_index != -1):
        # Find beginning of term
        t_phrase_end = loop_index + len(before_phrase)
        term_start = string_content.find(before_char, t_phrase_end) + 1

        # Find end of term
        term_end = string_content.find(after_term_phrase, term_start)

        # Splice to get term
        term = string_content[term_start:term_end]
        terms.append(term)
        
        # Find beginning of definition
        d_phrase_end = string_content.find(before_phrase, term_end + len(after_term_phrase)) + len(before_phrase)
        def_start = string_content.find(before_char, d_phrase_end) + 1

        # Find end of definition
        def_end = string_content.find(after_term_def, def_start)

        # Splice to get definition
        definition = string_content[def_start:def_end]
        definitions.append(definition)

        # Preceding pattern
        loop_index = string_content.find(before_phrase, def_end)

    return terms, definitions


def parse_brain():

    html_content = get_data("brain_page.txt")
    string_content = html_content.decode('utf-8')
    
    return string_content

# html_content = scrape_content(card_url)
# store_data(text_data_name, html_content)

# html_content = get_data(text_data_name)
# html_content = html_content.decode('utf-8')
# print(html_content)

# Integrate parsing with scraping
terms, definitions = parse_quizlet(card_url)
print(terms)
print(definitions)




