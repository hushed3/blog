---
date: 2023-08-06
title: 'JavaScript - 异步操作和异步传染性'
template: article
thumbnail: '../thumbnails/js.png'
slug: AsyncInfectivity
categories:
  - JavaScript
tags:
  - JavaScript
---

`JavaScript`作为一门`单线程语言`，同一时间只能执行一个操作。这就意味着，在处理一些耗时操作时，程序会出现`阻塞`，导致`UI`无响应。为了避免这种情况，`异步编程`变得至关重要。`异步操作`可以将耗时的任务交给浏览器或运行时环境来处理，同时保持`UI`的响应性。

### 回调函数

`回调函数`是处理异步操作的最早方法之一。它在处理事件、定时器、网络请求等方面得到了广泛应用。然而，随着异步操作嵌套层次的增加，`回调地狱（Callback Hell）`成为了一个普遍存在的问题，降低了代码的`可读性`和`可维护性`。

```javascript
// 使用回调函数处理异步操作
function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error(error))
}

fetchData('https://api.github.com/users/hushed3', function (data) {
  console.log(data)
})
```

### Promise 和异步操作链

为了解决回调地狱问题，`ES6`引入了`Promise`，它提供了一种更优雅的处理异步操作的方式。`Promise`允许我们将异步操作组合成`链式调用`，通过`.then()`来处理成功和失败的情况，使得代码更具结构性。同时，通过`.catch()`可以捕获链中任何位置发生的错误，使错误处理变得更方便。

```javascript
// 使用Promise处理异步操作
function fetchData(url) {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

fetchData('https://api.github.com/users/hushed3')
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
```

### async/await

`ES2017`引入了`async/await`语法。使用`async`关键字可以标记一个函数为`异步函数`，而使用`await`关键字可以等待一个异步操作完成。

```javascript
// 使用async/await处理异步操作
async function fetchData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

;(async () => {
  const data = await fetchData('https://api.github.com/users/hushed3')
  console.log(data)
})()
```

### 错误处理和异常

在异步操作中。`Promise`提供了错误传播机制，可以通过`.catch()`来捕获和处理错误。同时，`async/await`也可以使用`try/catch`来捕获异步操作中的异常。良好

```javascript
// 异步操作中的错误处理
fetchData('https://api.github.com/users/hushed3')
  .then((data) => console.log(data))
  .catch((error) => console.error(error))

// 使用async/await处理错误
;(async () => {
  try {
    const data = await fetchData('https://api.github.com/users/hushed3')
    console.log(data)
  } catch (error) {
    console.error(error)
  }
})()
```

### 异步传染性
- 假设我们有一个函数`getUser`，传入用户标识后，查找该用户信息,并且返回用户名。

```javascript
function getName() {
  const res = getUser('hushed3')

  return res.name
}
```

- 但是`用户的信息`是保存在服务器中的。所以，为了获取该值，我们需要发起`异步请求`。

```javascript
function getUser(user) {
  return fetch(`https://api.github.com/users/${user}`)
}

async function getName() {
  const res = await getUser('hushed3')
  const user = await res.json()

  return user.name
}

async function main() {
  const res = await getName()
  console.log(res) // hushhhh
}

main()
```

> 但是，`async await`是有`传染性`的，当一个函数变为`async`后，这意味着调用他的函数也需要是`async`，这破坏了`getName`的同步特性。

### 消除异步传染性

消除`异步`的`传染性`是指在`JavaScript`中处理异步代码时，防止异步操作在代码中传播，影响到其他部分的执行。

利用`try...catch`并通过缓存的方式来处理异步请求结果，从而在后续的调用中直接使用缓存的数据。

1. 在函数开始时，创建一个`cache`对象，它用于存储异步请求的状态和值。初始状态为`'pending'`，值为`null`。
2. 将原始的`window.fetch`方法保存在`oldFetch`变量中，以便后面可以还原。
3. 将全局的`window.fetch`方法替换为一个新的函数。在新的`fetch`方法中，首先判断`cache`的状态，如果已经有缓存的数据，则直接返回缓存的值。如果`cache`状态为`'rejected'`，则抛出缓存的错误值。
4. 如果没有缓存或缓存状态为`'pending'`，则调用原`fetch`方法发起请求。接着在`成功`和`失败`的情况下分别将结果保存到`cache`中，并改变`cache`的状态为`'fulfilled'`或`'rejected'`。
5. 在捕获到结果之前，抛出了一个`p`变量，它是新的`fetch`方法返回的`Promise`对象。这个步骤的目的是为了在`func`执行的过程中捕获到这个`Promise`，以便在后续的错误处理中使用。
6. 使用`try`块来执行传入的`func`函数。
7. 在捕获到错误时，判断错误是否是一个`Promise`对象。使用`.then()`方法再次执行`func`，无论是`成功`还是`失败`。最后，无论如何，都会通过`.finally()`来还原原始的`window.fetch`方法。

```javascript
function run(func) {
  const cache = {
    status: 'pending',
    value: null,
  }

  const oldFetch = window.fetch

  // 修改请求逻辑
  window.fetch = function (...args) {
    // 判断是否有缓存
    if (cache.status === 'fulfilled') {
      return cache.value
    } else if (cache.status === 'rejected') {
      throw cache.value
    }

    // 发起请求,then或catch后保存数据
    const p = oldFetch(...args)
      .then((res) => res.json())
      // 保存值到缓存，并改变状态
      .then(
        (res) => {
          cache.status = 'fulfilled'
          cache.value = res
        },
        (err) => {
          cache.status = 'rejected'
          cache.value = err
        }
      )

    // 抛出错误，返回当前的promise
    throw p
  }

  try {
    func()
  } catch (err) {
    // 捕获到抛出的primise ，判断是否为promise
    if (err instanceof Promise) {
      // 再次执行
      err.then(func, func).finally(() => {
        // 还原fetch
        window.fetch = oldFetch
      })
    }
  }
}

run(main)
```
