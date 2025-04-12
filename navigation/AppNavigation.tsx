import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ChatScreen from '../screens/Chat';
import ProfileScreen from '../screens/Profile';
import { RootStackParamList } from '../types';
import { createStaticNavigation, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import SettingsScreen from '../screens/Settings';

const RootStack = createNativeStackNavigator<RootStackParamList>({
  initialRouteName: 'Home',
  screens: {
    Home: HomeScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen
  }
});

const Navigation = createStaticNavigation(RootStack);

const AppNavigation = () => {
  const scheme = useColorScheme();

  return (
    <Navigation theme={scheme === 'dark' ? DarkTheme : DefaultTheme} />
  );
};

export default AppNavigation;
