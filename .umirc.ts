import { defineConfig } from 'dumi';

const logo = 'https://gallary.ithen.cn/images/2020/07/30/doraemon.png';
export default defineConfig({
  title: 'Doraemon',
  description: '项目常用的工具函数集合，哆啦A梦般方便实用',
  favicon: logo,
  logo: logo,
  publicPath: '/',
  outputPath: 'docs-dist',
  exportStatic: {}, // 会生成对应的静态html
  hash: true,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/juicecube/doraemon',
    },
  ],
  // more config: https://d.umijs.org/config
});
