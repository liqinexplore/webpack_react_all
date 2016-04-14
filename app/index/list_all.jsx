import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/antd/lib/index.css';
import { Menu, Icon } from 'antd';
import list_all from './../_global/list_all.js';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const Sider = React.createClass({
    getInitialState() {
        return {
            current: '1'
        };
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    },
    getDefaultProps: function () {
        return {
            config: []
        }
    },
    propTypes: {
        config: React.PropTypes.array
    },
    render: function () {
        var config = this.props.ShowDatas;
        console.log(config);
        //遍历第一层里面的数据用return来遍历这一层的数据并调用下一层的数据children
        var items = config.menu_structure.map(function (item) {
            console.log("1:",item.name);
            //定义两个参数在新的一层中调用children代表循环序列，drapdown代表这一层的内容
            var children, drapdown;
            //如果在item中包括child则执行下一层
            if (item.child) {
                //调用下一层循环
                children = item.child.map(function (child){
                    var test,child2;
                    if(child.child){
                        child2=child.child.map(function(childs){
                           console.log(test);
                            test=(
                                <Menu.Item   key={childs.keyID}  >
                                    {childs.name}
                                </Menu.Item>
                            );
                            return test;
                       })
                    }
                    //判断是否有下一层中的child，如果没有执行drapdown，然后再去调用child2
                    drapdown=(
                        <MenuItemGroup  key={child.keyID} title={<span><Icon type={child.icon} /><span>{child.name}</span></span>}>
                            {child2}
                        </MenuItemGroup>
                    );

                    return drapdown;
                });
            }
            //遍历这一层的数据，并调用下一层数据children，其中这一层的参数是item
            return (
                <SubMenu key={item.keyID} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                    {children}
                </SubMenu>
            );
        });
        //console.log(items);
        //return false;

        return (
            //第一层外边框 调用第一层中的循环items
            <Menu onClick={this.handleClick}
                         style={{ width: 240 }}
                         defaultOpenKeys={['1']}
                         selectedKeys={[this.state.current]}
                         mode="inline">
                        {items}
            </Menu>
        );
    }
});
ReactDOM.render(<Sider ShowDatas={list_all} />, document.getElementById('listall'));