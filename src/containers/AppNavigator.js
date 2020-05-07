import React from 'react'
import { View, Text } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from './main/MainNavigator';

import { store } from 'store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from 'store';
const Stack = createStackNavigator();

const isAuth = false;

const AppNavigator = () => {
    return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <MainNavigator/>
            </NavigationContainer>
        </PersistGate>
    </Provider>
    )
}

export default AppNavigator;
