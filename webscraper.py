import csv
import requests
import time

# Return data from link
# Write to CSV file

'''
Card set attributes
- Title
- Num of cards
- List of terms
- List of definitions
'''

INCREMENT = 3000

def list_scraper(links):


    # open the file in the write mode
    with open('sets.csv', 'w') as f:
        # create the csv writer
        writer = csv.writer(f)
        for link in links:
            row = ["hello", "there"]

            writer.writerow(row)
            time.sleep(INCREMENT)


link = "https://quizlet.com/27462182/econ-unit-1-flash-cards/"

headers = {
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'en-US,en;q=0.9',
  'cache-control': 'max-age=0',
  'cookie': 'yourcookie',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-site': 'none',
  'sec-fetch-user': '?1',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (X11; CrOS x86_64 12239.92.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.136 Safari/537.36',
}

def test(link):
    text = requests.get(link, headers=headers).text
    print(text)

test(link)