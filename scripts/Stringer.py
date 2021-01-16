import requests
import re
from bs4 import BeautifulSoup, SoupStrainer

def stringer(url):
    """returns the chapter contents as a string"""
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = response.content
    soup = BeautifulSoup(html)
    book = soup.find(attrs={'class': 'chapter-inner chapter-content'})
    return str(book())
