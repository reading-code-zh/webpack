// eslint-disable-next-line node/no-extraneous-require
const { SyncWaterfallHook } = require("tapable")

class MyTapable {
  constructor() {
    this.hooks = {
      syncWaterfallHook: new SyncWaterfallHook(['myName', 'myAge'])
    }
    this.on()
  }
  // 注册
  on() {
    this.hooks.syncWaterfallHook.tap('myTap1', (name, age) => {
      console.log('myTap1', name, age)
      return '20'
    })
    this.hooks.syncWaterfallHook.tap('myTap2', (name, age) => {
      console.log('myTap2', name, age)
    })
  }
  // 初始化
  emit() {
    this.hooks.syncWaterfallHook.call('17', 18)
  }
}

const tapable = new MyTapable()
tapable.emit()
