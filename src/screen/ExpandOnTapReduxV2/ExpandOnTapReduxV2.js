import React, { Component } from 'react';
import {
    Card,
    CardSection,
} from '../../components/common';
import ExpandOnTapComponentReduxV2 from './ExpandOnTapComponentReduxV2'
import { connect } from 'react-redux';

class ExpandOnTapReduxV2 extends Component {
    
    static navigationOptions = {
        title: 'ExpandOnTapRedux-V2',
    };
    
    render() {
        return (
            <Card>
                <ExpandOnTapComponentReduxV2 title={"Physics"} message={"Physics message"} isClosed={false}/>
                <ExpandOnTapComponentReduxV2 title={"Chemistry"} message={"Chemistry message"} isClosed={false}/>
                <ExpandOnTapComponentReduxV2 title={"Maths"} message={"Maths message"} isClosed={false}/>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {}
};

export default connect(mapStateToProps)(ExpandOnTapReduxV2);