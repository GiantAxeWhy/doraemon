---
group:
  title: 方法
  toc: menu
---

# digitalToCash

将数字转换成带逗号的金额并保留两位小数。

---

## 使用

```typescript
import { digitalToCash } from '@why/doraemon';

digitalToCash(0); // 0.00
digitalToCash(10000); // 1,000.00
digitalToCash(-1000000); // -1,000,000.00
digitalToCash(99999.999); // 99,999.99
```
