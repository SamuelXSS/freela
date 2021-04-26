import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AuthProvider } from './contexts/Auth/AuthContext';

import Routes from './routes';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'} />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;