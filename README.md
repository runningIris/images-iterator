图片路径遍历器

### TODO

- [ ] 兼容 windows 下反斜杠的路径名
- [ ] 修复后缀名造成的冲突
- [ ] 修复下划线和横杆造成的冲突

### 安装

`npm install images-iterator`

### 用法：

```
npm run iterate [images' path]
```

`[images' path]`指的是图片文件夹的路径

例: 遍历示例图片 ./images 文件夹

```
npm run iterate ./images
```

### 功能

遍历一个文件夹內的图片名，并写入文件 xxx(图片文件夹)/index.js 里

xxx/index.js 的一个例子

```js
export default {
  headBg: require("./images/head-bg.jpg"),
  iconLike: require("./images/icon-like.png"),
  logo: require("./images/logo.png"),
  search: require("./images/search.png"),
  tabNavBg: require("./images/tab-nav-bg.png"),
  webHeartAnimation: require("./images/web_heart_animation.png"),
  worksBg: require("./images/works-bg.png"),
  works: require("./images/works.jpg"),
  wxShareIcon: require("./images/wx-share-icon.jpg")
};
```

### 应用场景

写 react 项目时，如果图片很多，不必一个个手写引入，可以批量处理

```js
import { headBg, iconLike, logo, search, tabNavBg } from "./images";

function Image(props) {
  return <img src={logo} alt="logo" />;
}
```

或者，完全不用写到具体的图片

```js
import images from "./images";
function Container(props) {
  return (
    <div>
      {Object.keys(images).map(name => (
        <img key={name} src={images[name]} alt={name} />
      ))}
    </div>
  );
}
```
