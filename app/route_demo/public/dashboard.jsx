import React from 'react';
import ReactDOM from 'react-dom';
import TopBar from '../../index/World.jsx'
import Sider from '../../index/list_all.jsx';
import {hashHistory} from 'react-router';
require('../../_global/custom.css');

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <div className="miantop">
                    <TopBar />
                </div>
                <div className="mianleft">
                <Sider />
                </div>
                <div className="mianright">
                    {this.props.children}
                </div>


            </div>
        )
    }
}
module.exports=Dashboard;