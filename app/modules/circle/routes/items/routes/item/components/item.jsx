/**
 * Created by lizhen on 4/12/2016.
 */
import React, { Component } from 'react'
import { Table } from 'antd';
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
       super(props);
       this.state={
           data: [],
           pagination: {},
           loading: false,
       }
   }
    handleTableChange(pagination, filters, sorter) {
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            pageSize: pagination.pageSize,
            currentPage: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            filters:filters,
        });
    }
    fetch(params={}){
        console.log('请求参数：', params);
        this.setState({ loading: true });
        reqwest({
            url:'http://ant.design/components/table/demo/data.json',
            method:'get',
            data:params,
            type:'json',
            success:(result)=>{
                const pagination = this.state.pagination;
                pagination.total = result.totalCount;
                this.setState({
                    loading: false,
                    data: result.data,
                    pagination,
                });
            }
        })
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
                   onChange={this.handleTableChange} />
        )
    }
}
module.exports = circleItem;
