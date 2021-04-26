import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import CardsHeader from './CardsHeader';
import Cards from './Cards';

import styles from './styles.js';

const Home = () => {

  return (
    <View style={styles.container}>
      <Header />
      <CardsHeader />
      <Cards />
      <Footer />
    </View >
  )
}

export default Home;