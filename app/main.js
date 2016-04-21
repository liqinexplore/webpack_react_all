
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute,Link } from 'react-router';
import Home from './modules/_public/Home';
import Dashboard from './modules/_public/Dashboard';
import NotFound from './modules/_public/NotFound';
const routerConfig = [
    {
        path: '/',
        component: Dashboard,
        indexRoute: { component: Home },
        breadcrumbName:'首页',
        childRoutes: [
           require('./modules/circle')
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