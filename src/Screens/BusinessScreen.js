import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// components
import Business from '../components/Business';
import Search from '../components/Search';

export default function BusinessScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Business"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
