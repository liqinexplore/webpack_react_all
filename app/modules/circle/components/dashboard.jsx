
//https://cnodejs.org/topic/5231a630101e574521e45ef8
import React, { Component } from 'react'
import {NavBox }from  'customComponents'

class Dashboard extends Component {
    render() {

        const thisData = [
            {id: 1, title: '列表', route: "circle/items", description: "所有有关圈子的操作（新建、搜索、设置、修改、删除、浏览、详细信息）"},
            {id: 2, title: '帖子', route: "circle/posts", description: "所有有关帖子的操作（搜索、设置、修改、删除、浏览、内容管理）"},
            {id: 3, title: '评论', route: "circle/comments", description: "所有有关评论的操作（搜索、设置、修改、删除、浏览、评论管理）"},
            {id: 4, title: '精选圈子', route: ""},
            {id: 5, title: '发现圈子', route: ""},
            {id: 6, title: '圈子轮播图', route: ""}
        ]

        return (
            <div>
                <ul>
                    <NavBox data={thisData}/>
                </ul>
            </div>
        )
    }
}
module.exports = Dashboard;
