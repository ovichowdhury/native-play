/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screens/Login';
import DashboardScreen from './src/screens/Dashboard';

const Stack = createStackNavigator();



const App = () => {



    return (
        <>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
            </Stack.Navigator>
        </>
    );
};



export default App;
