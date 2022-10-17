---
group:
  title: 方法
  toc: menu
---

# limitStringToTarget
截取`limit`（默认是10）长度的字符串并向末尾添加指定字符串`target`（默认为...），比如：
***

```javascript
// 五星红旗迎风...
limitStringToTarget('五星红旗迎风飘扬', 6);
// 五星红旗迎风飘扬
limitStringToTarget('五星红旗迎风飘扬');
// 五星红旗迎风。。。
limitStringToTarget('五星红旗迎风飘扬', 6, '。。。');
```