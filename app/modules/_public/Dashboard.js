/**
 * Created by Administrator on 2016/4/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './page_top.js'
import Sider from '../../index/list_all.jsx';
import {hashHistory} from 'react-router';
import { Breadcrumb } from 'antd';
require('../../_global/custom.css');

class Dashboard extends React.Component{
    render(){
        return(
            <div>
            <div className="system_top">
            <TopBar />
            </div>
                <div className="system_menu">
                <Sider/>
                </div>
                <div className="system_content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
module.exports=Dashboard;