import React from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/antd/lib/index.css';
import { Menu, Icon } from 'antd';
import list_all from './../_global/list_all.js';
import { Link } from 'react-router'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component{
    constructor(props,context){
        super(props, context);
        console.log(list_all);
        this.state={}
    }
    handleClick(e) {
        this.setState({
            current: e.key
        });
    }

    render(){
        function genMenu(items){

        return items.map((kid)=>{

            switch (kid.type){
                case "group":
                    return(
                        <MenuItemGroup  key={kid.keyID}
                                        title={ <span><Icon type={kid.icon} /><span>{kid.name}</span></span>}>
                         {(()=> {
                            return genMenu(kid.child);
                        })()}
                        </MenuItemGroup>
                    );
                    break;
                case "level":
                    return(
                        <SubMenu key={kid.keyID} title={
                         (!!kid.router)
                         ?
                        <Link to={kid.router}>
                        <span><Icon type={kid.icon} /><span>{kid.name}</span></span>
                        </Link>
                         :
                         <span><Icon type={kid.icon} /><span>{kid.name}</span></span>
                        }>
                            {(()=> {
                                return genMenu(kid.child);
                            })()}
                        </SubMenu>
                    );
                    break;
                default:
                    return(
                        <Menu.Item   key={kid.keyID}  >
                            <Link to={kid.router}> {<span><Icon
                                type={kid.icon}/><span>{kid.name}</span></span>}</Link>
                        </Menu.Item>
                    );
                    break;

                }
            }
        )
    }
        console.log(this.props.ShowDatas);
        return(
            <div>
                <Menu onClick={this.handleClick.bind(this)}
                      style={{ width: '100%'}}
                      defaultOpenKeys={['1']}
                      selectedKeys={[this.state.current]}
                      mode="inline">
                    {
                        this.props.ShowDatas.map((item)=>{

                            if(item.child){

                                return(

                                    <SubMenu key={item.keyID} title={ <Link to={item.router}><span><Icon type={item.icon} /><span>{item.name}</span></span></Link>}>
                                    {
                                        (()=>{
                                            return  genMenu(item.child);
                                        })()
                                    }
                                    </SubMenu>
                                )
                            }else{
                                return(
                                    <Menu.Item   key={item.keyID}  >
                                        <Link to={item.router}> {<span><Icon
                                            type={item.icon}/><span>{item.name}</span></span>}</Link>
                                    </Menu.Item>
                                )
                            }
                        })
                    }
                </Menu>
            </div>

        )
    }
}
Sider.defaultProps={
    ShowDatas:list_all.menu_structure
};
export default Sider;