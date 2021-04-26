import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Authentication/Login';
import RecoverPassword from '../pages/Authentication/RecoverPassword';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="RecoverPassword" component={RecoverPassword} />
  </AuthStack.Navigator>
);

export default AuthRoutes;