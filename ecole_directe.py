##ecole_directe

import requests

url="https://www.ecoledirecte.com/login"

session=requests.Session()
response=session.get(url)

quit()

with open("file.html","w") as file:
    file.write(response.text)