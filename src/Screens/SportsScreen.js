import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// components
import Sports from '../components/Sports';
import Search from '../components/Search';

export default function SportsScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Sports"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Sports" component={Sports} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
