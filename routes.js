
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Pages/Login';
import Dados from './Pages/dados';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={
                { headerShown: true }
            } initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dados" component={Dados} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;