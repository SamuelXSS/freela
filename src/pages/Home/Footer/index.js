import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import { bell, chat } from '../../../assets/img/icons';
import { commonStyles } from '../../../assets/styles/global';

const Footer = () => {

  return (
    <View style={styles.cardsContainer}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={bell} style={styles.image} />
          <Text style={[commonStyles.regularLabelText, styles.notify]}>99+</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={chat} style={styles.image} />
          <Text style={[commonStyles.regularLabelText, styles.notify]}>99+</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;