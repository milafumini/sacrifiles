import pandas as pd

df = pd.read_csv('toshow.csv')

html = df.to_html()
print(html)