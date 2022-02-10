import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';

export default function App({navigation}) {
  const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Page1" component={Page1}/>
          <Tab.Screen name="Page2" component={Page2}/>
          <Tab.Screen name="Page3" component={Page3}/>
          <Tab.Screen name="Page4" component={Page4}/>
          <Tab.Screen name="Login" component={Login}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});