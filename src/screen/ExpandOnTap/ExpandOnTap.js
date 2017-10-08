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