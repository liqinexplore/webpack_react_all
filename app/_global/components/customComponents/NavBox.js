import React from 'react';
import { Row, Col } from 'antd';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';
import {Alert} from 'antd';

export default React.createClass({
    routeTo(){
        hashHistory.push("/circle/items/id/new");
    },
    render(){
        let properties = this.props;
        console.log(properties);
        const RouteLink = React.createClass({
            render() {
                console.log("this.props",this.props);
                const { to ,title,description} = this.props;
                const className = `hight-`;
                return (
                    <Link className={className} to={to}>
                        <Alert message={title} description={description} type="info"showIcon />
                    </Link>
                );
            }
        });
        return(
            <Row>
                {
                    this.props.data.map(event =>(
                        <Col key={event.id} onclick={this.routeTo} span="8" className="NavBox"><RouteLink to={event.route} title={event.title} description={event.description}/></Col>
                    ))

                }
            </Row>
        )
    }
})