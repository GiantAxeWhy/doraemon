---
group:
  title: 方法
  toc: menu
---

# getUrlQuery

返回 url 参数。

---

## 常用

比如从`location.href`获取参数。

```typescript
import React from 'react';
import { getUrlQuery } from '@why/doraemon';

// 默认取location.href
getUrlQuery();
export default props => {
  const query = getUrlQuery(
    'https://GiantAxeWhy.github.io/doraemon?name=doraemon',
  );
  return <h1>{query.name}</h1>;
};
```

## 任性用

比如从`location.search`获取参数。

```typescript
import React from 'react';
import { getUrlQuery } from '@why/doraemon';

export default props => {
  // 聪明的人看得出，区别在这儿
  const query = getUrlQuery('?name=doraemon');
  return <h1>{query.name}</h1>;
};
```
