import React, { Component } from 'react';
import {
    Card,
    CardSection,
} from '../../components/common/index';

import {
    ExpandOnTapComponent
} from './ExpandOnTapComponent';


class ExpandOnTap extends Component {
    
    static navigationOptions = {
        title: 'ExpandOnTap',
    };
    
    state = { index: -1 };
    
    onButtonPress(inpIndex) {
        this.setState({ index: inpIndex });
    }
    
    render() {
    
        const { params } = this.props.navigation.state;
    
        console.log(params.data)
    
        return (
            <Card>
                <ExpandOnTapComponent title={"Physics"} message={"Physics message"}/>
                <ExpandOnTapComponent title={"Chemistry"} message={"Chemistry message"}/>
                <ExpandOnTapComponent title={"Maths"} message={"Maths message"}/>
            </Card>
        );
    }
}

export default ExpandOnTap;