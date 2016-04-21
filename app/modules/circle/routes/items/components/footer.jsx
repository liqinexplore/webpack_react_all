/**
 * Created by lizhen on 4/12/2016.
 */

import React, { Component } from 'react'
import { Table, Icon ,Alert} from 'antd';
import { Link } from 'react-router'

module.exports = class extends Component {
    render() {
        //console.log("this.props: ", this.props);

        return (<Alert message="需求与疑问请向技术部提出" type="info" />)
    }
}
