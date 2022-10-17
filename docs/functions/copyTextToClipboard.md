---
group:
  title: 方法
  toc: menu
---

# copyTextToClipboard

复制字符串至粘贴板并返回复制是否成功。

---

## 使用

```typescript
import { copyTextToClipboard } from '@giantaxewhy/doraemon';
import { message } from 'antd';

const handleCopy = async () => {
  try {
    const copyRes = await copyTextToClipboard('doraemon');
    if (copyRes) {
      message.success('复制成功！');
    } else {
      message.error('复制失败！');
    }
  } catch (error) {
    console.log(error);
  }
};
```
