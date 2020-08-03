import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const Stack = () => {
    return (
        <NavigationContainer>
            <HomeStack.Navigator>
                <HomeStack.Screen
                    name='Home'
                    component={Home}
                    options={{
                        title: 'Welcome'
                    }}
                />
                <HomeStack.Screen
                    name='About'
                    component={About}
                />
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}
export default Stack