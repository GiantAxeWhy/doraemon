# doraemon

项目常用但 lodash 又没有的工具函数集合，哆啦 A 梦般方便实用。

## 使用

### 安装

```bash
npm i @giantaxewhy/doraemon@latest
```

### 按需引入

1. 安装 babel-plugin-import

```bash
npm i -D babel-plugin-import
```

2. .babelrc

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "@giantaxewhy/doraemon",
        "camel2DashComponentName": false
      }
    ]
  ]
}
```

3. 引入（省略前两步时就不是按需引入了）

```typescript
import { getUrlQuery } from '@giantaxewhy/doraemon';

getUrlQuery('https://da.ithen.cn?name=doraemon');
```

4. 若不想安装 babel-plugin-import，又想按需引入：

```typescript
import getUrlQuery from '@giantaxewhy/doraemon/lib/getUrlQuery';

getUrlQuery('https://da.ithen.cn?name=doraemon');
```

更多使用文档详看[Doraemon](https://da.ithen.cn)。

## TODO

[TODOS](https://github.com/GiantAxeWhy/doraemon/projects/3);

## 开发

### 常用命令

```bash
# 单个文件测试
jest test/limitStringToTarget.test.ts
```

## 须知

- 如有问题或提需求请提[issue](https://github.com/GiantAxeWhy/doraemon/issues)。
