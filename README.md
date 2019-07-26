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
 

# _**`使用Enzyme时候与mocha的区别`**_
* Enzyme提供创建Dom的方法shallow，mount，render（三种有区别可见Enzyme的介绍）
* Enzyme有shallow，mount，render创建dom对象之后，可以有类似于JQuery的方法，具体的操作dom
* Mocha提供断言的方法，describe，it 方法, 没有test方法
 
* Jest提供断言的方法，describe，it 方法, 也有test方法, 果然 Jest后来者居上


# Setup and Teardown
## 钩子函数，在做Test Case的数据初始化等操作
```
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach  //beforeEach 1 
// 1 - test
// 1 - afterEach
// 2 - beforeAll
// 1 - beforeEach  //beforeEach 2
// 2 - beforeEach
// 2 - test
// 2 - afterEach   //afterEach 1
// 1 - afterEach   //afterEach 2
// 2 - afterAll    //afterAll 2
// 1 - afterAll    //afterAll 2
```

`Note`
* the `top-level` `before`Each is executed before the `before`Each `inside` the describe block
* the `inside` `after`Each is executed before the `after`before Each `top-level` the describe block
  
#  Matchers（匹配器）介绍
* ## 相等匹配，这是我们最常用的匹配规则　

```
.toBe() \\值判断
.not.toBe() \\值判断
.toEaqual() \\对象判断
.not.toEaqual() \\对象判断
```
```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
```
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```
```
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

* ## 真实性匹配，比如：对象是否为null，集合是否为空等等

  ### 在测试中，您有时需要区分undefined、null和false，但有时希望以不同的方式处理这些问题，Jest帮助你明确您想要什么。比如：
  * toBeNull 仅当expect返回对象为 null
  * toBeUndefined 仅当返回为 undefined
  * toBeDefined 和上面的刚好相反，对象如果有定义时
  * toBeTruthy 匹配任何返回结果为true
  * toBeFalsy 匹配任何返回结果为false


```
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});
```
```
test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

```

* ## 数字大小的比较
  ```
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  ```
  ```
  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);  This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
  ```
  `float类型的浮点数计算的时候，需要使用toBeCloseTo而不是 toEqual ，因为避免细微的四舍五入引起额外的问题`


* ## 字符串的匹配
  
  ```
  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });
  ```
* ## 数组类型匹配
  ```
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];

  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  }); 
  ```

* ## 异常匹配
  ```
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });
  ```


  # `jsdom和manual_mock冲突，在Enzyme.mount()运行之前，需要使用jsdom模拟一个真实的DOM的环境`

  # 为什么要使用Enzyme.mount()？
    1. Shallow Rendering（浅渲染）指的是，将一个组件渲染成虚拟DOM对象，但是只渲染第一层，不渲染所有子组件，所以处理速度非常快。它不需要DOM（jsdom）环境，因为根本没有加载进DOM。
    2. 相对潜渲染，mount需要DOM（jsdom）环境
    3. render会根据react组件生成一个静态html文本，并且分析生成的html结构，需要第三方的html解析库Cheerio去生成一个类似于mount和shallow得到的封装对象。
    4. render和mount的区别就是render可以不需要jsdom去模拟一个真实dom环境，执行效率来说，mount要高一些