<p align="center">
  <a target="_blank" href="#">
  <img alt="autolog" src="https://raw.githubusercontent.com/Larryzhu-dev/autolog.js/main//autolog.svg" width="300">
  </a>
</p>

<p align="center">
  <h2 align="center">autolog.js</h2>
</p>

一个轻量化小弹窗，无需任何依赖，一行代码即可弹出，并自动管理状态。

安装

```shell
npm i autolog.js
```

使用

```js
import aotolog from "autolog.js";

autolog.log("Hello World", "success", 2500);
// 其中 "success" 和 2500 都是可选项
```

自定义 icon

支持 svg 字符串，iconfont 类名

```js
import alog from "autolog.js";
const autolog = alog.create({
 svgIcons: {
     customSvg: `<svg>...</svg>`,
     iconfont: "icon-xxx"
 }
});
```

