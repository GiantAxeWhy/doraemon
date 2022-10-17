---
title: checkPhoneNumber
toc: menu
---

# checkPhoneNumber

检查手机号是否合法。

```typescript
import { checkPhoneNumber } from '@why/doraemon';

checkPhoneNumber('13222222222'); // true
checkPhoneNumber(13222222222); // true
checkPhoneNumber('12222222222'); // false
checkPhoneNumber('23222222222'); // false
checkPhoneNumber('1322222222'); // false
```
