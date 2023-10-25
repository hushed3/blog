---
title: 'JavaScript - 发布订阅模式'
description: ''
date: 2022-06-30
lastUpdated: 2022-06-30
template: article
icon: javascript
slug: publisher
categories:
  - JavaScript
tags:
  - JavaScript
published: true
---

### 实现一个发布者 Publisher 类

```javascript
class Publisher {
  constructor() {
    this.deps = []
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  publish(dep) {
    this.deps.forEach((item) => item === dep && item.notify())
  }
}
```

### 实现一个订阅者 Subscriber 类

```javascript
class Subscriber {
  constructor(val) {
    this.val = val
  }

  update(callback) {
    callback(this.val)
  }
}
```

### 实现一个调度中心 Dep 类,处理消息

```javascript
class Dep {
  constructor(callback) {
    // 核心是这个 callback 函数；
    this.subs = []
    this.callback = callback
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach((item) => item.update(this.callback))
  }
}
```

### 实例化一个发布者

```javascript
let pub = new Pub() // 实例化一个发布者
```

### 实例化一个调度中心，传入一个用于处理数据的函数；

```javascript
const dep = new Dep((data) => console.log('我是调度中心，我先把消息处理一下，然后发给订阅者', data))
```

### 实例化一个订阅者

```javascript
let sub1 = new Sub('订阅者1') // 实例化订阅者
let sub2 = new Sub('订阅者2') // 实例化订阅者
```

### 添加订阅者到调度中心,推送消息

```javascript
dep.addSub(sub1) // 调度中心添加订阅者1
dep.addSub(sub2) // 调度中心添加订阅者2

pub.publish(dep) // 发布者把消息推给调度者

// 我是调度中心，我先把消息处理一下，然后发给 ==> 订阅者1
// 我是调度中心，我先把消息处理一下，然后发给 ==> 订阅者2
```
