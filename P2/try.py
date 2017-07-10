#coding=utf-8
import re
import urllib.request

def getHtml(url):
    page = urllib.request.urlopen(url)
    html = page.read()
    return html


def getImg(html):
    reg = r'src="(.+?\.jpg)" pic_ext'
    imgre = re.compile(reg)
    html = html.decode('utf-8')
    imglist = re.findall(imgre, html)
    return imglist

html = getHtml("https://tieba.baidu.com/p/1962278170")
print(getImg(html))