/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    applyMiddleware,
    createStore
} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import MainScreen from './screen/MainScreen';
import ButtonAlert from './screen/ButtonAlert';
import ExpandOnTap from './screen/ExpandOnTap/ExpandOnTap';
import ExpandOnTapReduxV1 from './screen/ExpandOnTapReduxV1/ExpandOnTapReduxV1';
import ExpandOnTapReduxV2 from './screen/ExpandOnTapReduxV2/ExpandOnTapReduxV2';
import QuestionRedux from './screen/Question/Question'
import QuestionReduxV2 from './screen/QuestionV2/QuestionV2'
import AlbumsReduxRender from './screen/AlbumsReduxRender/AlbumList'
import AlbumsCDM from './screen/AlbumsCDM/AlbumList'
import AlbumsCWM from './screen/AlbumsCWM/AlbumList'
import AlbumsRender from './screen/AlbumsRender/AlbumList'

import {
    StackNavigator,
} from 'react-navigation';

const StackNavigationScreens = StackNavigator({
    MainScreen: {screen: MainScreen},
    ButtonAlert: {screen: ButtonAlert},
    ExpandOnTap: {screen: ExpandOnTap},
    ExpandOnTapReduxV1: {screen: ExpandOnTapReduxV1},
    ExpandOnTapReduxV2: {screen: ExpandOnTapReduxV2},
    QuestionRedux: {screen: QuestionRedux},
    QuestionReduxV2: {screen: QuestionReduxV2},
    AlbumsReduxRender: {screen: AlbumsReduxRender},
    AlbumsCDM: {screen: AlbumsCDM},
    AlbumsCWM: {screen: AlbumsCWM},
    AlbumsRender: {screen: AlbumsRender},
    
});

class App extends Component {
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
              <StackNavigationScreens />
            </Provider>
        );
    }
}

export default App;