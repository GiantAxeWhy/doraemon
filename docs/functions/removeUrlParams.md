---
group:
  title: 方法
  toc: menu
---

# removeUrlParams
删除指定url上的指定参数。
***

```javascript
// https://da.ithen.cn?name=zane
removeUrlParams('https://da.ithen.cn?name=zane&age=18', 'age);
// https://da.ithen.cn?name=zane
removeUrlParams('https://da.ithen.cn?name=zane&age=18', ['age']);
```