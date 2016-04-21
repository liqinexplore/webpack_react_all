/**
 * Created by Administrator on 2016/4/21.
 */
import React,{Componet} from 'react';
import ReactDOM from 'react-dom';
import {NavBox} from 'customComponents'

class Home extends Componet{
    render(){
        const thisData = [
            {id: 1, title: '新闻', route: "news",description:"所有有关新闻的操作"},
            {id: 2, title: '情报站', route: "news",description:"所有有关情报站的操作"},
            {id: 3, title: '圈子', route: "circle",description:"所有有关圈子的操作（圈子、圈帖、圈评）"},
            {id: 4, title: '线下', route: "underline",description:"所有有关线下的操作（商品、活动、商家、品牌、评价）"},
            {id: 5, title: '序列管理', route: "serial"},
            {id: 6, title: '个人中心', route: "user"},
            {id: 7, title: '其他', route: ""}
        ]
        return(
            <div>
            <ul>
                <NavBox data={thisData}/>
            </ul>
            </div>
        )
    }
}
module.exports=Home;