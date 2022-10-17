---
title: deleteInvalidValue
toc: menu
---

# deleteInvalidValue

删除目标对象的无效值如`null`|`undefined`。

```typescript
import { deleteInvalidValue } from '@why/doraemon';

deleteFieldsFromObj({ a: NaN, b: 2, c: null, d: undefined }); // { b: 2 }
```
