from django.http import JsonResponse
import requests


STRIP_WORDS = ['a','an','and','by','for','from','in','no','not',
               'of','on','or','that','the','to','with']

def _prepare_words(search_text):
    """ strip out common words, limit to 5 words """
    words = search_text.split()
    for common in STRIP_WORDS:
        if common in words:
            words.remove(common)
    return ' '.join(words[0:5])

def search_products(key):
    key = _prepare_words(key)

    book_response = requests.get(f'http://127.0.0.1:8008/api/book/search?key={key}')
    books = book_response.json() if book_response.status_code == 200 else []

    mobile_response = requests.get(f'http://127.0.0.1:8008/api/mobile/search?key={key}')
    mobiles = mobile_response.json() if mobile_response.status_code == 200 else []

    clothes_response = requests.get(f'http://127.0.0.1:8008/api/clothes/search?key={key}')
    clothes = clothes_response.json() if clothes_response.status_code == 200 else []
    products = books + mobiles + clothes
    return products
