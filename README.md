Jest+React+Enzyme [react-jest demo](https://github.com/LDT2016/react-jest

# 安装 enzyme 相关
```bash
npm install enzyme --save-dev
npm install enzyme-adapter-react-16 --save-dev
npm install jest --save-dev
npm install babel-jest --save-dev
npm install babel-preset-env --save-dev
npm install react-test-renderer --save-dev 
npm install enzyme-to-json --save-dev
```

## 修改package.json
```
"test": "jest --notify --watchman=false",
```

`这里强调记录下，为什么要加--watchman=false，因为在国内watchman连接的会会超时`

## jest.setup.js

### 添加jest.config.js

#### 生成jest.config.js
```sh
npx jest –init
```

可以看到jest缺省把测试用例放到__test__文件夹，也是为了testMatch的节点配置，
testMatch： jest验证匹配的文件
testPathIgnorePatterns：jest忽略匹配的文件
找到以上节点，打开注释

#### babelrc 配置
`在根目录下创建 babel.config.js（.babelrc）文件`

##### babel.config.js的配置
```sh
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
```

##### .babelrc的配置
```js
{
  "presets": ['@babel/preset-env', '@babel/preset-react'],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
 

# 使用Enzyme时候与mocha的区别
* Enzyme提供创建Dom的方法shallow，mount，render（三种有区别可见Enzyme的介绍）
* Enzyme有shallow，mount，render创建dom对象之后，可以有类似于JQuery的方法，具体的操作dom
* Mocha提供断言的方法，describe，it 方法, 没有test方法
 
* Jest提供断言的方法，describe，it 方法, 也有test方法, 果然 Jest后来者居上



