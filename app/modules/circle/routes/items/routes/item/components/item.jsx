/**
 * Created by lizhen on 4/12/2016.
 */
import React, { Component } from 'react'

class circleItem extends Component {
    render() {
        let properties = this.props;
        console.log("item.props: ", this.props);
        return (
            <div>
                此处是具体某一条数据的详细信息页，根据传入的参数（{properties.params.circleID}）读取接口，显示数据，进行逻辑操作。
            </div>
        )
    }
}
module.exports = circleItem
