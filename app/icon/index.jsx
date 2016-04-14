import React from 'react';
import ReactDOM from 'react-dom';
require ('./index.less');
import { Icon, Button } from 'antd';

const Demo = React.createClass({
    render() {
        <Icon type="plus" />
        return <Button type="primary"> Button</Button>;
    }
});

ReactDOM.render(<Demo />, document.getElementById('container'));
