import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// components
import Home from '../components/Home';
import Search from '../components/Search';

export default function HomeScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
