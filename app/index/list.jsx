import React from 'react';
import ReactDOM from 'react-dom';

import list_data from './../_global/list_data.js'

var Navigation =React.createClass({
    componentWillMount: function () {

    },
   getInitialState:function(){
       return{
           openDropdown: -1
       };
   },
    getDefaultProps:function(){
        return{
            config:[]
        }
    },
    propTypes:{
        config:React.PropTypes.array
    },
    render:function(){
        var config = this.props.ShowDatas;
        console.log(config);
        var items = config.navigationConfig.map(function (item) {
            return (
                <li className="navigation__item">
                    <a className="navigation__link" href={ item.href }>

                        { item.text }
                    </a>
                </li>
            );
        });
        return (
            <div className="navigation">
                { items }
            </div>
        );
    }
});
//var Navigation = React.createClass({
//    getInitialState: function () {
//        return {
//            openDropdown: -1
//        };
//    },
//    getDefaultProps: function () {
//        return {
//            config: []
//        }
//    },
//    propTypes: {
//        config: React.PropTypes.array
//    },
//    render: function () {
//        var config = this.props.config;
//        var items = config.map(function (item) {
//            var children, dropdown;
//            if (item.children) {
//                children = item.children.map(function (child) {
//                    return (
//                        <li className="navigation__dropdown__item">
//                            <a className="navigation__dropdown__link" href={ child.href }>
//                                { child.text }
//                            </a>
//                        </li>
//                    );
//                });
//                dropdown = (
//                    <ul className="navigation__dropdown">
//                        { children }
//                    </ul>
//                );
//            }
//            return (
//                <li className="navigation__item">
//                    <a className="navigation__link" href={ item.href }>
//                        { item.text }
//                    </a>
//                    { dropdown }
//                </li>
//            );
//        });
//        return (
//            <div className="navigation">
//                { items }
//            </div>
//        );
//    }
//});
ReactDOM.render(<Navigation ShowDatas={list_data} />,document.getElementById('lista'));