import requests
from pprint import pprint
API_Key = '744c85a34fe812c60c24c9696ef9b5ca'
city = input("Enter a city:")
base_url = "https://api.openweathermap.org/data/2.5/weather?appid="+API_Key+"&q="+city
weather_data = requests.get(base_url).json()
pprint(weather_data)