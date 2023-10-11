## 和风天气API

```
https://free-api.heweather.net/s6/weather/now?location=shenzhen&key=a74ec8e1876b4b14a95126ab3a48f0aa
```

## 封装代码

```JavaScript
const getJSON = function(url){
    return new Promise((resolved,rejected)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange = handler;
        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept','application/json');
        xhr.send();
        function handler(){
            if(this.readyState == 4){
                if(this.status == 200){
                    resolved(this.response.HeWeather6[0]);
                }
                else{
                    rejected(new Error(this.statusText))
                }
            }
            
        }
    })
}
getJSON('https://free-api.heweather.net/s6/weather/now?location=shenzhen&key=a74ec8e1876b4b14a95126ab3a48f0aa')
.then((data)=>{
    console.log(data);
    
},(error)=> {
    console.log(error); 
})
```

