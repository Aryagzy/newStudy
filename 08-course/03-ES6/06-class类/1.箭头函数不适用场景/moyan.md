## 不适用箭头函数的场景

1. DOM 绑定的事件中调用 this 来获取自身的某个属性值

   ```javascript
   document.querySelector('#textBtn').oninput = () => {
      console.log(this.value); // undefined
   };
   ```

2. 通过 call、apply、bind 来改变 箭头函数的 this

   ```javascript
   // apply
   const A = (age, gender) => {
     this.age = age;
     this.gender = gender;
   };
   const a = {};
   A.apply(a, [18, 'gender']);
   console.log(a); // {}
   
   // bind
   const test = () => {
   	console.log(this.gender); // window.gender => undefined
   };
   const obj = {
   	gender: 'male',
   };
   const bindTest = test.bind(obj);
   bindTest();
   ```

3. 把箭头函数当做构造函数

   ```javascript
   const A = () => {};
   const a = new A(); // 报错
   ```

4. 在构造函数中使用 arguments 对象

   ```javascript
   const a = () => {
     console.log(arguments); // arguments 未定义
   };
   ```

5. 把箭头当做  generator 函数使用

   ```javascript
   const a = *() => {}; // 编译器就语法错误了
   ```