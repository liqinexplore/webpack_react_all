/**
 * Created by Administrator on 2016/4/21.
 */
import React,{Componet} from 'react';
import ReactDOM from 'react-dom';
import {NavBox} from 'customComponents'

class Home extends Componet{
    render(){
        const thisData = [
            {id: 1, title: '����', route: "news",description:"�����й����ŵĲ���"},
            {id: 2, title: '�鱨վ', route: "news",description:"�����й��鱨վ�Ĳ���"},
            {id: 3, title: 'Ȧ��', route: "circle",description:"�����й�Ȧ�ӵĲ�����Ȧ�ӡ�Ȧ����Ȧ����"},
            {id: 4, title: '����', route: "underline",description:"�����й����µĲ�������Ʒ������̼ҡ�Ʒ�ơ����ۣ�"},
            {id: 5, title: '���й���', route: "serial"},
            {id: 6, title: '��������', route: "user"},
            {id: 7, title: '����', route: ""}
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