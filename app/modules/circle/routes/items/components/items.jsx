/**
 * Created by lizhen on 4/12/2016.
 */

import React, { Component } from 'react'
import { Table, Icon, Popconfirm, message } from 'antd';
import { Link } from 'react-router'
//import NavLink from 'rewriteAntd';
function confirm() {
    message.success('点击了确定');
}
function cancel() {
    message.error('点击了取消');
}

const columns = [{
    title: '圈子名称',
    dataIndex: 'circle_name',
    key: 'circle_name',
    render(text, record) {
        return (
            <Link to={`/circle/items/id/${record.key}`} activeClassName="active">{text}</Link>
        );
    }
}, {
    title: '管理员',
    dataIndex: 'creatorID',
    key: 'creatorID',
}, {
    title: '创建时间',
    dataIndex: 'created_time',
    key: 'created_time',
}, {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render(text, record) {
        return (
            <span>
                {record.status == 1 ? <Icon type="check"/> : <Icon type="cross" style={{color:"red"}}/>}
            </span>

        );
    }
},{
    title: '选到发现',
    dataIndex: 'key',
    key: 'key',
    render(text, record) {
        return (
            <Popconfirm title="确定要将此圈子选到发现圈子中？" onConfirm={confirm} onCancel={cancel}>
                <a href="#">选到发现</a>
            </Popconfirm>
        );
    }
}, {
    title: '操作',
    key: 'operation',
    render(text, record) {
        return (
            <span>
                <Link to={`/circle/items/id/${record.key}`} activeClassName="active"><Icon type="setting"/>详细信息</Link>
            </span>
        );
    }
}];
const data = [{
    key: '1',
    circle_name: '跑步者',
    creatorID: 1000,
    description: '对年轻人来说，跑步显然不仅仅是健身那么单纯的事情。除了锻炼，中国人把跑步当成一种社交手段，正在城市白领中兴起：嘿，我今天跑步去了。',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '2',
    circle_name: '上班这件事',
    creatorID: 1000,
    description: '爱情，岂是一首情歌就能描述？    生活，怎么是一个家庭和伴侣就能安然度过？工作，究竟占有怎样的分量？ ',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '3',
    circle_name: '我总觉得自己就是一个傻逼',
    creatorID: 1000,
    description: '我们崇尚的傻逼应该是一种 “真善美”，是一种执着的精神，内心心怀美好，但却与社会很多事情冲突，不愿做出改变，希望坚持自己内心的美好继续下去。 ',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '4',
    circle_name: '八卦来了 | 大圣齐天',
    creatorID: 1000,
    description: '少崇拜明星，创造自己的人生才是最重要的事。人生的意义在于不断突破自己，对社会有用。金钱, 名利与地位和衣服一样，总有一天你要脱下它们，唯一有价值的是你曾经帮助过的人，曾经做过的有意义的事。',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '5',
    circle_name: '管理实践与学习',
    creatorID: 1000,
    description: '管理就是决策，权衡轻重才有先后次序    管理就是沟通，求同存异才有协同配合管理就是执行，计划周密才有流程顺畅 ',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '6',
    circle_name: '我们什么都知道',
    creatorID: 1000,
    description: '日语的几个假名，模仿一下伦敦腔，猫的饮食禁忌，动漫美剧 TVB，绘本和好听的曲，初级摄影技巧和电脑各种软件，广告学和一点点法律…… 还有各种各种小 tip，只爱皮毛，不爱深挖。    说穿了，我就是一个虚荣心强的懒家伙。你们呢?',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '7',
    circle_name: '掀起你的内幕来',
    creatorID: 1000,
    description: '┃发帖标题必须有以下分类┃【品牌】【餐饮】【医疗】【服装】【金融】【珠宝】【首饰】【美容】【日化】【交通】【家居】【数码】【教育】【艺术】【职业】【异国】【网络】【事件】【心理】【讨论】【转帖】【其他】',
    created_time: '2016年4月13日',
    status: '0'
}, {
    key: '8',
    circle_name: '無印良品',
    creatorID: 1000,
    description: '无论你是有多了解这个牌子或者是偶尔加入都希望一起交流的 信息与分享 能让你的生活的某天 多有意思一点。',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '9',
    circle_name: '爱猫俱乐部',
    creatorID: 1000,
    description: '猫，是我们的朋友；是我们生活的一部分；补充新声明：最近有打着小组官方微信建群拉人诈骗的微信群！特别声明猫组完全没有盈利项目且没有任何官方微信群！请各位蓝星人不要上当！凡发微信群的一律封号不解释！',
    created_time: '2016年4月13日',
    status: '1'
}, {
    key: '10',
    circle_name: '草莓音乐节',
    creatorID: 1000,
    description: '关于草莓音乐节的一切，草莓的一切，音乐的一切，都可以在这里讨论、发布。',
    created_time: '2016年4月13日',
    status: '1'
}];

class CircleItems extends Component {
    render() {
        console.log("items.props: ", this.props);

        return (
            <div>
                {
                    this.props.children
                    ||
                    <Table columns={columns} dataSource={data}
                           expandedRowRender={record => <p>{record.description}</p>}/>
                }
            </div>
        )
    }
}
module.exports = CircleItems;
