/**
 * Created by Administrator on 2016/4/6.
 */
//import Hello from './index/Hello.jsx';
//import World from './index/World.jsx';
//import antd from './index/antd.jsx';
//import list from  './index/list.jsx';
//import list_all from './index/list_all.jsx';
//import index from './icon/index.jsx';
//import inputdemo from './qlwb_demo/inputdemo.jsx';
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
});

const Inbox = React.createClass({
    render() {
        return (
            <div>
                Inbox
            </div>
        )
    }
});

const About = React.createClass({
    render() {
        return (
            <div>
                About
            </div>
        )
    }
});
// 添加组件 Index
const Index = React.createClass({
    render() {
        return (
            <div>
                Index
                Index
                Index
            </div>
        )
    }
});

//render((
//    <Router>
//        <Route path="/" component={App}>
//            <Route path="about" component={About} />
//            <Route path="inbox" component={Inbox} />
//        </Route>
//    </Router>
//), document.getElementById('app'));
// 添加 404 组件
const NotFound = React.createClass({
    render() {
        return (
            <div>
                404
                NotFound
            </div>
        )
    }
});
// 修改配置
const routerConfig = [
    {
        path: '/',
        component: App,
        indexRoute: { component: Index },
        childrenRoutes: [
            { path: 'about', component: About },
            { path: 'inbox', component: Inbox },
        ]
    },
    {
        path: '*',
        component: NotFound,
    }
];
render((
    <Router  history={hashHistory} routes={routerConfig} />
), document.getElementById('app'));