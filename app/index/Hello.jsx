import React from 'react';
import ReactDOM from 'react-dom';
require ('../_global/custom.css');
class Helloa extends React.Component{
    render(){
        var a = [];
        for (var i = 0; i < 10; i++) {
            a[i] = function () {
                console.log(i);
            };
        }
        console.log(a[2]()); // 10
        return <h1>你好</h1>

    }

}
ReactDOM.render(<Helloa/>,document.getElementById('hello'));