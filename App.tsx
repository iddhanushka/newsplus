/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  // SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/components/Home';
import Local from './src/components/Local';
import International from './src/components/International';
import Business from './src/components/Business';
import Sports from './src/components/Sports';
import Search from './src/components/Search';

import HomeScreen from './src/Screens/HomeScreen';
import LocalScreen from './src/Screens/LocalScreen';
import InternationalScreen from './src/Screens/InternationalScreen';
import BusinessScreen from './src/Screens/BusinessScreen';
import SportsScreen from './src/Screens/SportsScreen';

const Tab = createMaterialTopTabNavigator();
// const Stack = createStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(props): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Local" component={LocalScreen} />
        <Tab.Screen name="International" component={InternationalScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Business" component={BusinessScreen} />
        <Tab.Screen name="Sports" component={SportsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  addContactButton: {
    backgroundColor: '#665D5D',
    padding: 10,
    width: 50,
    height: 50,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default App;
