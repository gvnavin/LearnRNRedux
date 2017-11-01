import React, { Component } from 'react';
import {
    Button,
    Card,
    CardSection
} from '../components/common';

import { ScrollView } from 'react-native';

class MainScreen extends Component {
    
    static navigationOptions = {
        title: 'MainScreen',
    };
    
    render() {
        
        const { navigate } = this.props.navigation;
        
        return (
            <ScrollView>
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
                            <Button onPress={() => navigate('ExpandOnTap', { data: 'test-data' })}>
                                ExpandOnTap
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('ExpandOnTapReduxV1', { data: 'test-data' })}>
                                ExpandOnTapReduxV1
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('QuestionRedux')}>
                                QuestionRedux
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('QuestionReduxV2')}>
                                QuestionReduxV2
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('AlbumsReduxRender')}>
                                AlbumsReduxRender
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('AlbumsCDM')}>
                                Albums Component Did Mount
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('AlbumsCDM')}>
                                Albums Component Will Mount
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardSection>
                            <Button onPress={() => navigate('AlbumsRender')}>
                                Albums Render
                            </Button>
                        </CardSection>
                    </Card>
                </Card>
            </ScrollView>
        );
    }
}

export default MainScreen;