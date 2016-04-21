import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard.jsx';
import {Affix} from 'antd';

class Circle extends Component{
    render() {
        console.log("adsfa this.props: ", this.props);
        let { header, main, footer, children, params } = this.props, content
        if (header || main || footer) {
            content = (
                <div className="content_group">
                    {(!!header) ? (<Affix offset={20}><div className="content_header">{header}</div></Affix>) : ""}
                    {(!!main) ? (<div className="content_main">{main}</div>) : ""}
                    {(!!footer) ? (<div className="content_footer">{footer}</div>) : ""}
                </div>
            )
        } else if (children) {
            content = children
        } else {
            content = <Dashboard />
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}
module.exports=Circle;