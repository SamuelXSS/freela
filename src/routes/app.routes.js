import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Chat from '../pages/Chat';
import JobsList from '../pages/JobsList';

export const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="JobsList" component={JobsList} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
