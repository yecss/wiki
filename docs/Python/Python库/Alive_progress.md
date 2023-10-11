使用方法

```python
with alive_bar(len(ImgUrl)) as bar: 
        for ImgUrls in ImgUrl:
            #重新定义URL
            UrlFinall = re.sub("thumb_200_0_","",ImgUrls)
            mkfiles(UrlFinall,Titles)
            bar()
```

