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
import ExpandOnTap from './screen/ExpandOnTap';
import ExpandOnTapReduxV1 from './screen/ExpandOnTapReduxV1/ExpandOnTapReduxV1';
import ExpandOnTapReduxV2 from './screen/ExpandOnTapReduxV2/ExpandOnTapReduxV2';
import Question from './screen/Question/Question'
import QuestionV2 from './screen/QuestionV2/QuestionV2'

import {
    StackNavigator,
} from 'react-navigation';

const StackNavigationScreens = StackNavigator({
    MainScreen: {screen: MainScreen},
    ButtonAlert: {screen: ButtonAlert},
    ExpandOnTap: {screen: ExpandOnTap},
    ExpandOnTapReduxV1: {screen: ExpandOnTapReduxV1},
    ExpandOnTapReduxV2: {screen: ExpandOnTapReduxV2},
    Question: {screen: Question},
    QuestionV2: {screen: QuestionV2}
});

class App extends Component {
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
              < StackNavigationScreens />
            </Provider>
        );
    }
}

export default App;