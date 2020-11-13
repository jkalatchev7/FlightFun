import requests
import pandas as pd

origin = input("Enter Origin Airport Code: ").upper()

listCodes = ["SFO", "LAX", "ORD", "JFK", "IAD"]
testOrigin = "SFO"
testDest = "IAD"
querystring = {"inboundpartialdate":"2020-12-01"}

testurl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/%s-sky/%s-sky/%s" % (testOrigin, testDest, querystring["inboundpartialdate"])

headers = {
    'x-rapidapi-key': "8334b1be82msh6b0193ec25e329ap1d5320jsnbe501d429b64",
    'x-rapidapi-host': "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
    }

df = pd.DataFrame(columns=['Destination', 'Price', 'Layover'])


for q in listCodes:
    if (q != origin):
        url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/%s-sky/%s-sky/%s" % (
        origin, q, querystring["inboundpartialdate"])
        response = requests.request("GET", url, headers=headers, params=querystring)
        h = response.json()
        prices = []
        for i in h["Quotes"]:
            prices.append(i["MinPrice"])

        tempdf = pd.DataFrame([[q, min(prices), h["Quotes"][0]["Direct"]]], columns=['Destination', 'Price', 'Layover'])

        df = df.append(tempdf)

df = df.sort_values(by=["Price"])
print("Here are the cheapest options for flights from Boston: ")
print(df.to_string(index=False))






#does = h["Quotes"][0]["Direct"]

#has_layover = "does"
#if (does):
#    has_layover = "doesn't"


#st = "The cheapest flight between %s and %s costs $%d and %s have a layover!" % (testOrigin, testDest, min(prices), has_layover)

#print(st)
