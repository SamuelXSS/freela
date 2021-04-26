import React from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import logo from '../../assets/img/reduced-logo.png'

import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color='#A5CD39' size={120} />
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

export default Loading;