/**
 * Created by Administrator on 2016/4/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from './page_top.js'
import Sider from '../../index/meun.jsx';
import {hashHistory} from 'react-router';
import { Breadcrumb } from 'antd';
require('../../_global/custom.css');

class Dashboard extends React.Component{
    componentWillMount() {
        let D = new Date();
        let dateTime = D.getFullYear() + "-" + (parseInt(D.getMonth()) + 1) + "-" + D.getDay();
        let keyInLs = localStorage.getItem("token_" + dateTime);
        let keyInSs = sessionStorage.getItem("token_" + dateTime);
        if ((!!keyInLs == false) && (!!keyInSs == false)) {
            hashHistory.push("/login");
        }
    }
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