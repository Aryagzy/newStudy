/*
vue的插件库
*/

(function () {
    //需要向外面暴露的插件对象
    const MyPlugin = {}
    //插件对象必须要有一个install()
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property属性
        Vue.myGlobalMethod = function () {
            console.log('Vue函数对象的方法myGlobalMethod()')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function (el, binding) {
            el.textContent = binding.value.toUpperCase()
        })
      
        // 3. 注入组件选项(先不讲)
      
        // 4. 添加实例方法(对实例对象添加方法----原型)
        Vue.prototype.$myMethod = function () {
            console.log('Vue实例对象的方法$myMethod()')
        }
    }

    //向外暴露
    // @ts-ignore
    window.MyPlugin = MyPlugin
    
})()

    