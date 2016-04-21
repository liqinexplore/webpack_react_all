
//https://cnodejs.org/topic/5231a630101e574521e45ef8
import React, { Component } from 'react'
import {NavBox }from  'customComponents'

class Dashboard extends Component {
    render() {

        const thisData = [
            {id: 1, title: '�б�', route: "circle/items", description: "�����й�Ȧ�ӵĲ������½������������á��޸ġ�ɾ�����������ϸ��Ϣ��"},
            {id: 2, title: '����', route: "circle/posts", description: "�����й����ӵĲ��������������á��޸ġ�ɾ������������ݹ���"},
            {id: 3, title: '����', route: "circle/comments", description: "�����й����۵Ĳ��������������á��޸ġ�ɾ������������۹���"},
            {id: 4, title: '��ѡȦ��', route: ""},
            {id: 5, title: '����Ȧ��', route: ""},
            {id: 6, title: 'Ȧ���ֲ�ͼ', route: ""}
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
