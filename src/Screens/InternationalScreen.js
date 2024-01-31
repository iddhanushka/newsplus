import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// components
import International from '../components/International';
import Search from '../components/Search';

export default function InternationalScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="International"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="International" component={International} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
