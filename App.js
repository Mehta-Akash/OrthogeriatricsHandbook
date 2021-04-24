import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/Home';
import { DetailsScreen } from './components/DetailsScreen';
import {
  BottomTabView,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import About from './components/About';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Ortho-Geriatrics Handbook' }}
      />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5794ff',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
