import React, { Component } from 'react';
import {
    Button,
    Card,
    CardSection
} from '../../components/common/index';
import { Text } from 'react-native';

class ExpandOnTapComponent extends Component {
    
    state = { isClosed: true };
    
    onButtonPress() {
        console.log("onButtonPress before setState", this.state.isClosed)
        this.setState({ isClosed: !this.state.isClosed });
        console.log("onButtonPress after setState", this.state.isClosed)
    }
    
    renderMessage() {
        console.log(this.state.isClosed)
        if (!this.state.isClosed) {
            console.log(this.state.isClosed)
            console.log(this.props.message)
            return (
                <Text style={{ flex: 1 }}>
                    {this.props.message}
                </Text>
            );
        }
    }
    
    render() {
        console.log(this.props.message)
        return (
            <Card>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        {this.props.title}
                    </Button>
                </CardSection>
                <CardSection>
                    {this.renderMessage()}
                </CardSection>
            </Card>
        );
    }
}

export { ExpandOnTapComponent };