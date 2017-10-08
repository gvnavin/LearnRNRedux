import React, { Component } from 'react';
import {
    Button,
    Card,
    CardSection
} from '../components/common';

import { Alert, } from 'react-native';

class ButtonAlert extends Component {
    
    static navigationOptions = {
        title: 'ButtonAlert',
    };
    
    onButtonPress(text) {
        Alert.alert(
            text,
            text,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                },
            ],
            { cancelable: true }
        )
    }
    
    render() {
        return (
            <Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => this.onButtonPress("Physics")}>
                            Physics
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => this.onButtonPress("Chemistry")}>
                            Chemistry
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => this.onButtonPress("Maths")}>
                            Maths
                        </Button>
                    </CardSection>
                </Card>
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

export default ButtonAlert;