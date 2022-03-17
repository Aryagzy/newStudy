##过滤器

#### 过滤器的注意点

  1.要定义到filters节点下，本质就是一个函数

  2.在过滤器函数中，一定要有return值

  3.在过滤器的形参中，就可以获取到“管道符”前面待处理的那个值

  4.如果全局过滤器和私有过滤器名字一致，此时调用的是私有过滤器



## 侦听器的格式

1.方法格式的侦听器

- 缺点1：无法在刚进入页面时。自动触发！
- 缺点2：如果侦听的是一个对象，如果对象中的属性发生了变化，不会触发侦听器！

2.对象格式的侦听器

- 好处1：可以通过immediate选项，让侦听器自动触发
- 好处2：可以通过deep选项，让侦听器深度监听对象中每个属性的变化！

## 计算属性

特点：

   1.定义的时候，要被定义为方法

  2.使用计算属性的时候，当做普通的属性使用即可

  

好处：

   1.实现了代码的复用

   2.只要计算属性中的依赖的数据源发生了变化，则计算属性就会被重新赋值

## axios

axios是一个专注于网络请求的库！

### axios的基本使用

1.发起GET请求

```js

         const result = axios({
             //请求方式
             method: 'GET',
             //请求地址
             url: 'http://127.0.0.1:8000/axios',
             //URL中的查询参数
             params: {//get请求
                 id: 1
             },
         }).then((result) => {
             console.log(result);
         })

```

2.发起POST请求

```js
<script>
        document.querySelector('#btnPost').addEventListener('click', async function() {
            //await只能用在被async修饰的方法中
            //如果调用的方法返回的是Promise实例，前面可以加await --这样可以直接返回数据
         const result = await axios({
             //请求方式
             method: 'GET',
             //请求地址
             url: 'http://127.0.0.1:8000/axios',
             //请求体参数
             data: {
                name: '郭小胖~',
                age: 20
             },
         })
         console.log(result);
        })
   </script>
       
```





## vue-cli的使用

1.在终端下运行如下的命令，创建指定名称的项目

```
vue create 项目名称
```

2.vue项目中src目录的构成:

```
assets 文件夹：存放项目中用到的静态资源文件，例如：css样式表 图片资源
components 文件夹：程序员封装的，可复用的组件，都要放到components目录下
main.js 是项目的入口文件，整个项目的运行，要先执行 main.js
App.vue 是项目的根组件
```

