// components/my-cpn/my-cpn.js
Component({
  options: {
    // styleIsolation  设置样式隔离
    // isolated 默认 启动样式隔离
    // apply-shared  表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面
    // shared   表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了
    styleIsolation: 'apply-shared'
  }
})