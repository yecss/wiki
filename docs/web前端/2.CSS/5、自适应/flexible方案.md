## 采用

flexible库

将屏幕分成10分，1rem就是1/10的宽度。

## 其他

```
      ;(function (doc, win) {
        var docEl = doc.documentElement,
          resizeEvt =
            'orientationchange' in window ? 'orientationchange' : 'resize',
          recalc = function () {
            var clientWidth = docEl.clientWidth
            if (!clientWidth) return
            if (clientWidth >= 800) {
              docEl.style.fontSize = '100px'
            } else {
              docEl.style.fontSize = 100 * (clientWidth / 800) + 'px'
            }
          }

        if (!doc.addEventListener) return
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
      })(document, window)
```

