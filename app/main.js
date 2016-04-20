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
import Home from './route_demo/public/Home';
import Dashboard from './route_demo/public/dashboard';
import NotFound from './route_demo/public/notfound'
//render((
//    <Router>
//        <Route path="/" component={App}>
//            <Route path="about" component={About} />
//            <Route path="inbox" component={Inbox} />
//        </Route>
//    </Router>
//), document.getElementById('app'));
// 添加 404 组件

// 修改配置
const routerConfig = [
    {
        path: '/',
        component: Dashboard,
        indexRoute: { component: Home },
        childRoutes: [
           require('./route_demo/firstRoute')
        ]
    },
    {
        path: '*',
        component: Dashboard,
       indexRoute:{component:NotFound}
    }
];
render((
    <Router  history={hashHistory} routes={routerConfig} />
), document.getElementById('app'));