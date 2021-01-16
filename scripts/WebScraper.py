import requests
from bs4 import BeautifulSoup, SoupStrainer

def stringer(url):
    """returns the chapter contents as a string"""
    response = requests.get(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = response.content
    soup = BeautifulSoup(html)
    book = soup.find(attrs={'class': 'chapter-inner chapter-content'})
    return str(book())

def previous_chapter(url):
    """returns the previous chapter's url for the current chapter"""
    page = requests.get(url)
    data = page.text
    soup = BeautifulSoup(data, 'html.parser')
    current = soup.find(attrs={'class': 'row nav-buttons'})
    for link in current('a'):
        return(link.get('href'))

def next_chapter(url):
    """returns the next chapter's url for the current chapter"""
    page = requests.get(url)
    data = page.text
    soup = BeautifulSoup(data, 'html.parser')
    current = soup.find(attrs={'class': 'row nav-buttons'})
    count = 0
    for link in current('a'):
        if count == 1:
            return(link.get('href'))
        else:
            count += 1
