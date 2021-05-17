import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Chat from '../pages/Chat';

export const AppStack = createStackNavigator();

const AppRoutes = () => {

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Chat" component={Chat} />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
