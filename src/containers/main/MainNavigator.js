import React from 'react'
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DmScreen from './home/dm/DmScreen';
import StoryCameraScreen from './home/storyCamera/StoryCameraScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return(
    <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown : false}}  >
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="Dm" component={DmScreen}/>
        <Stack.Screen name="StoryCamera" component={StoryCameraScreen}/>
    </Stack.Navigator>
    )
}

export default MainNavigator;