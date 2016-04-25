/**
 * Created by lizhen on 4/12/2016.
 */
import React, { Component } from 'react'
import { Table } from 'antd';
import { Pagination } from 'antd';
import reqwest from 'reqwest';

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    filters: [
        { text: '姓李的', value: '李' },
        { text: '姓胡的', value: '胡' },
    ],
}, {
    title: '年龄',
    dataIndex: 'age',
    sorter: true,
}, {
    title: '住址',
    dataIndex: 'address',
}];
class circleItem extends Component {
   constructor(props){
       console.log("这是构造方法");
       super(props);
       this.state={
           data: [],
           pagination: {},
           loading: false
       }
   }
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        console.log("我是handleTableChange中的pager",pager);
        pager.current = pagination.current;
        console.log("我是handleTableChange中的pager.current",  pager.current);
        this.setState({
            pagination: pager,

        });
        console.log(pagination);
        this.fetch({
            pageSize: pagination.pageSize,
            currentPage: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            filters:filters,
        });
    }
    fetch(params={}){
        var _self=this;
        console.log('请求参数：', params);
        this.setState({ loading: true });
        fetch("http://ant.design/components/table/demo/data.json",{
            method:'get'
        }).then((res)=>{
            console.log("我是fetch第一个then的参数",res);
            if(res.ok){
                res.json().then((result)=>{
                    const pagination = _self.state.pagination;

                    pagination.total = result.totalCount;
                    _self.setState({
                        loading: false,
                        data: result.data,
                        pagination,
                    });
                })

            }
        });
    }
    componentDidMount() {
        this.fetch();
    }
    render() {

        return (
            <Table columns={columns}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange.bind(this)} />
        )
    }
}
module.exports = circleItem;
