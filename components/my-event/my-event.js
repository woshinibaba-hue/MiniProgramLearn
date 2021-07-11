// components/my-event/my-event.js
Component({
  /**
   * 组件的方法列表
   * 组件的方式都是写在这个 methods 当中的
   */
  methods: {
    add() {
      // console.log('-----');
      
      // 向外发射一个事件  就是调用  triggerEvent  向外发射一个 add 事件, 第二个参数就是传递的参数
      this.triggerEvent('add', {name: 'zs'})
    }
  }
})
