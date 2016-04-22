/**
 * Created by lizhen on 4/12/2016.
 */

import React, { Component } from 'react'
import { Table, Icon, Popconfirm, message, Button  } from 'antd';
import { Link } from 'react-router'
//import NavLink from 'rewriteAntd';

//const rowSelection={
//    onChange(selectedRowKeys,selectedRows){
//        //选中项发生变化的时的回调
//        //selectedRowKeys指定选中项的 key 数组，需要和 onChange 进行配合
//        //选择的key值selectedRowKeys
//        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//    },
//    onSelect(record, selected, selectedRows) {
//        console.log("这里是单项选择",record, selected, selectedRows);
//    },
//    onSelectAll(selected, selectedRows, changeRows) {
//        console.log("这里是全部选择",selected, selectedRows, changeRows);
//    }
//};
class CircleItems extends Component {
    constructor(props){//构造函数
        super(props);
       this.state={
           selectedRowKeys: [],  // 这里配置默认勾选列
           loading: false,
        }
    }
    start() {
        this.setState({ loading: true });
        // 模拟 ajax 请求，完成后清空
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    onChange(pagination, filters, sorter) {
        // 点击分页、筛选、排序时触发
        console.log('各类参数是', pagination, filters, sorter);
    }

    render() {
        const data = [];
        //定义方法，调用onChange，<Table onChange={onChange}  /> 这是方法一，方法二是onChange={this.onChange.bind(this)}

    //    const onChange=(pagination, filters, sorter) =>{
    //    // 点击分页、筛选、排序时触发
    //    console.log('各类参数是', pagination, filters, sorter);
    //}
//循环输出数组
        for(let i=0;i<46;i++){
            data.push({
                key:i,
                name:`李钦${i}`,
                age:'32',
                address:`济南${i}号`
            });
        }
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render(text) {
                return <a href="#">{text}</a>;
            },
            filters: [{
                text: '姓李的',
                value: '李',
            }, {
                text: '姓胡的',
                value: '胡',
            }, {
                text: '子菜单',
                value: '子菜单',
                children: [{
                    text: '姓陈的',
                    value: '陈',
                }, {
                    text: '姓王的',
                    value: '王',
                }],
            }],
            // 指定确定筛选的条件函数
            // 这里是名字中第一个字是 value
            onFilter: (value, record) => record.name.indexOf(value) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
            filters: [{
                text: '南湖',
                value: '南湖',
            }, {
                text: '西湖',
                value: '西湖',
            }],
            filterMultiple: false,
            onFilter: (value, record) => record.address.indexOf(value) === 0,
            sorter: (a, b) => a.address.length - b.address.length
        },{
            title:'操作',
            key:'operation',
            render(text,record){
                return(
                    <span>
                       <Link to={`/circle/items/id/${record.key}`} activeClassName="active"><Icon type="setting"/>详细信息</Link>
                         <span className="ant-divider"></span>
                     <a href="#" className="ant-dropdown-link">
                         更多 <Icon type="down" />
                     </a>
                    </span>
                )
            }

        }];
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange.bind(this),
            //	选择框的默认属性配置
            getCheckboxProps(record) {
                return {
                    disabled: record.name === '李钦2'    // 配置无法勾选的列
                };
            },
        };
        const hasSelected =selectedRowKeys.length>0;
        //分页器，配置项参考 pagination，设为 false 时不显示分页
        const pagination = {
            total: data.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
            }
        };

        return (

            <div>
                <div style={{ marginBottom: 16 }}>
                <Button type="primary" onClick={this.start.bind(this)} disabled={!hasSelected} loading={loading}>
                    操作
                </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected?`选择了 ${selectedRowKeys.length} 个对象`:''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} dataSource={data} onChange={this.onChange.bind(this)}  columns={columns} pagination={pagination} />
            </div>

        )
    }
}
module.exports = CircleItems;
