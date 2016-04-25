/**
 * Created by Administrator on 2016/4/21.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory  } from 'react-router'
import { Modal, Button } from 'antd';

class TopBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            visible_release_logs: false,
            visible_logout: false
        };
        this.openReleaseLog = this.openReleaseLog.bind(this);
    }

    logOut() {
        this.setState({
            visible_logout: true
        });
    }

    handleOk() {
        let D = new Date();
        let dateTime = D.getFullYear() + "-" + (parseInt(D.getMonth()) + 1) + "-" + D.getDay();
        sessionStorage.removeItem("token_" + dateTime);
        localStorage.removeItem("token_" + dateTime);
        hashHistory.push("/login");
        this.setState({
            visible_logout: false
        });
    }

    handleCancel(e) {
        this.setState({
            visible_logout: false
        });
    }

    openReleaseLog() {
        this.setState({
            visible_release_logs: !this.state.visible_release_logs
        });
        test(release_logs);
    }
    render(){
        return(
            <div>
                <h4>你好我们是首页的头部。是不是很简单啊，对我就是这样简单。</h4>
                <Button type="primary"
                        onClick={this.logOut.bind(this)}
                        style={{background: "#FF6666",border: "none", margin: "0px 10px",float:"right"}}>
                    退出登录
                </Button>
                <Modal title="退出登录"
                       visible={this.state.visible_logout}
                       onOk={this.handleOk.bind(this)}
                       onCancel={this.handleCancel.bind(this)}>
                    <span>你确定要退出登录吗？</span>
                </Modal>
            </div>
        )
    }
}

module.exports=TopBar;