import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

import Local from '../components/Local';
import Search from '../components/Search';

export default function LocalScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Local"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Local" component={Local} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
