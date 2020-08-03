//import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home'
import About from './views/About'
import Categories from './views/Categories';
import Foods from './views/Foods';
import FoodList from './views/FoodList';

const HomeStack = createStackNavigator();

export default function App() {
  return (
    <View style={css.container}>
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
          <HomeStack.Screen
            name='Categories'
            component={Categories}
          />
          <HomeStack.Screen
            name='Foods'
            component={Foods}
          />
          <HomeStack.Screen
            name='FoodList'
            component={FoodList}
          />
        </HomeStack.Navigator>
      </NavigationContainer>
    </View>
  )
}


