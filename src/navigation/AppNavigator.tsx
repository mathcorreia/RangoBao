// src/navigation/AppNavigator.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetailScreen';
import {RootStackParamList} from '../types';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'RangoBão'}}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={({route}) => ({title: route.params.restaurante.nome})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;