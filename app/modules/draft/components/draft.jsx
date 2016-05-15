import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard.jsx';
import {Affix} from 'antd';

class Draft extends Component{
    render() {
        console.log("adsfa this.props: ", this.props);
        let { draft_deom, children, params } = this.props,content;
        console.log("children",children);
        if (draft_deom) {
            content = (
                <div className="content_group">
                    {(!!draft_deom) ? (<Affix offset={20}><div className="content_header">{draft_deom}</div></Affix>) : ""}
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
module.exports=Draft;