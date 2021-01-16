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

def previous_chapter(url):
    """returns the previous chapter's url for the current chapter

    >>> previous_chapter('https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/301778/1-good-morning-brother')
    'error'

    >>> previous_chapter('https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/455877/afterword')
    '/fiction/21220/mother-of-learning/chapter/455876/epilogue'
    """

    page = requests.get(url)
    data = page.text
    soup = BeautifulSoup(data, 'html.parser')
    current = soup.find(attrs={'class': 'row nav-buttons'})
    count = 0
    temp = current('a')
    temp = BeautifulSoup(str(temp), 'html.parser')
    length = len(current('a'))
    if temp.find_all(text=re.compile("Previous")) == []:
        return "error"
    if temp.find_all(text=re.compile("Previous"))[0].find("Previous") > -1:
        if length >= 2:
            for link in current('a'):
                if count == 1:
                    return link.get('href')
                else:
                    count += 1
        else:
            for link in current('a'):
                return link.get('href')
    else:
        return "error"


def next_chapter(url):
    """returns the next chapter's url for the current chapter

    >>> next_chapter('https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/455877/afterword')
    'error'

    >>> next_chapter('https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/455876/epilogue')
    '/fiction/21220/mother-of-learning/chapter/455877/afterword'

    >>> next_chapter('https://www.royalroad.com/fiction/21220/mother-of-learning/chapter/301778/1-good-morning-brother')
    '/fiction/21220/mother-of-learning/chapter/301781/2-lifes-little-problems'

    >>>

    """
    page = requests.get(url)
    data = page.text
    soup = BeautifulSoup(data, 'html.parser')
    current = soup.find(attrs={'class': 'row nav-buttons'})
    count = 0
    temp = current('a')
    temp = BeautifulSoup(str(temp), 'html.parser')
    length = len(current('a'))
    if temp.find_all(text=re.compile("Next")) == []:
        return "error"
    if temp.find_all(text=re.compile("Next"))[0].find("Next") > -1:
        if length >= 2:
            for link in current('a'):
                if count == 1:
                    return link.get('href')
                else:
                    count += 1
        else:
            for link in current('a'):
                return link.get('href')
    else:
        return "error"
