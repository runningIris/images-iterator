const fs = require("fs");

// 图片文件夹的路径
const imagesPath = process.argv[2];

/**
 * 把下划线 a_a 和横杠 b-b 的命名方式改为驼峰
 * @param {string} name 变量名
 */
const camelizeName = name => {
  const index = ~name.indexOf("-") ? name.indexOf("-") : name.indexOf("_");
  if (index === -1) {
    return name;
  }
  const result =
    name.slice(0, index) +
    name.slice(index + 1, index + 2).toUpperCase() +
    name.slice(index + 2);
  return camelizeName(result);
};

/**
 * 获取到所有的图片路径组成数组
 * TODO: 需要考虑下划线和横杠转驼峰的话，会不会冲突
 * return [...filesNames]
 */
const files = fs
  .readdirSync(imagesPath, { encoding: "utf8" })
  .filter(fileName => fileName !== "index.js");

/**
 * 把图片路径构建成index.js的内容
 * return string
 */
const fileText =
  files.reduce((prev, file) => {
    return (
      prev +
      `${[
        camelizeName(file.split(".")[0])
      ]}: require("${imagesPath}/${file}"), \n`
    );
  }, "export default {\n") + "}";

/**
 * 写入index.js，供专题使用
 */
fs.writeFileSync(imagesPath + "/index.js", fileText);
