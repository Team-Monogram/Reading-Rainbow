import requests as req
import re
from bs4 import BeautifulSoup, SoupStrainer

def stringer(request):
    """returns the chapter contents as a string"""
    url = request.args.get('url')
    response = req.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = response.content
    soup = BeautifulSoup(html)
    book = soup.find(attrs={'class': 'chapter-inner chapter-content'})
    return book.text
