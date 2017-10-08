import React, { Component } from 'react';
import {
    Button,
    Card,
    CardSection
} from '../components/common';

import { Alert, } from 'react-native';

class MainScreen extends Component {
    
    static navigationOptions = {
        title: 'MainScreen',
    };
    
    render() {
    
        const { navigate } = this.props.navigation;
        
        return (
            <Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => navigate('ButtonAlert')}>
                            ButtonAlert
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => navigate('ExpandOnTap')}>
                            ExpandOnTap
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => navigate('ExpandOnTapReduxV1')}>
                            ExpandOnTapReduxV1
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => navigate('Question')}>
                            Question
                        </Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <Button onPress={() => navigate('QuestionV2')}>
                            QuestionV2
                        </Button>
                    </CardSection>
                </Card>
            </Card>
        );
    }
}

export default MainScreen;