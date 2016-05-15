/**
 * Created by lizhen on 4/12/2016.
 */

import React, { Component } from 'react'
import { Button } from 'antd';
import { Link,Router,hashHistory  } from 'react-router'

module.exports = class extends Component {
    createCircle() {
        hashHistory.push("/circle/items/id/new");
    }

    render() {
        return (<Button type="primary" onClick={this.createCircle}>新建圈子</Button>)
    }
}
