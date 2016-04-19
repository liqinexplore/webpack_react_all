import React from 'react';
import ReactDOM from 'react-dom';
require ('../_global/custom.css');
 const Helloa=React.createClass({
     getDefaultProps:function(){
       console.log("你好我是在createClass加载之前就执行的，生成实例之前 就");
     },
     getInitialState:function(){
       console.log("我是getInitialState我是在加载的时候执行");
        return null;
     },
     componentWillMount:function(){
       console.log("我是componentWillMount,我在加载之前执行")
     },
     componentDidMount:function(){
       console.log("我是componentDidMount,我是加载之后执行")
     },
    render:function(){
        console.log("我是render，我是在加载实例时执行")
        return <h1> 你好</h1>

    }
 });
ReactDOM.render(<Helloa/>,document.getElementById('hello'));