import requests
from bs4 import BeautifulSoup

def stringer(url):
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = response.content
    soup = BeautifulSoup(html)
    book = soup.find(attrs={'class': 'chapter-inner chapter-content'})
    return str(book())
