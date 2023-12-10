---
title: 'JavaScript - 原型及原型链'
description: ''
date: 2022-07-15
lastUpdated: 2022-07-15
template: article
icon: javascript
slug: prototype
categories:
  - JavaScript
tags:
  - JavaScript
published: true
---

#### 原型

我们创建的每一个函数都有一个 prototype 属性，这个属性指向一个对象。这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法，简单来说，该函数实例化的所有对象的**proto**的属性指向这个对象，它是该函数所有实例化对象的原型

```javascript
function Person() {}
Person.prototype.sayName = function () {}

let person1 = new Person()
let person2 = new Person()

person1.sayName === person2.sayName // true
```

#### 原型链

在 javascript 中,每当创建一个对象，都会给这个对象提供一个内置对象 `[[Prototype]]` 。这个对象就是原型对象，`[[Prototype]]` 的层层嵌套就形成了原型链

当我们访问一个对象的属性时，如果自身没有，就会通过原型链向上追溯，找到第一个存在该属性原型对象，取出对应值。  
当然原型链不是无止境的，最后一个原型对象的值是 null，原型链的所有对象都找不到指定的属性时，我们会拿到 **`undefined`**。

`[[Prototype]]` 虽然无法通过脚本进行访问，但大多数浏览器提供了 **`__proto__`** 属性来访问这个内置对象，但它并不是标准，无法兼容所有浏览器。**对象`__proto__`属性的值就是它所对应的原型对象**

```javascript
const obj = {}
obj.__proto__ === Object.prototype //true
//原型链是: obj -> Object.prototype -> null
```

```javascript
const arr = []
arr.__proto__ === Array.prototype //true
//原型链是 arr -> Array.prototype -> Object.prototype -> null
```

```javascript
const str = 'str'
str.__proto__ === String.prototype //true
//原型链是 str -> String.prototype -> Object.prototype -> null
```

```javascript
// 父类
function Father() {}
Father.prototype.draw = function () {
  console.log('Father Draw')
}
Father.prototype.clear = function () {
  console.log('Father Clear')
}

// 子类
function Son() {}

Son.prototype.draw = function () {
  console.log('Son Draw')
}

const son = new Son()
//此时原型链是:son -> Son.prototype -> Object.protoype -> null
```
