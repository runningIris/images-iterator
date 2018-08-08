## images iterator 图片路径遍历器

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

### 用法：

```
npm run iterate [images' path]
```

`[images' path]`指的是图片文件夹的路径，不写的话，默认是根目录下的 `./images`
