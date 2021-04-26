import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';
import { commonStyles } from '../../../assets/styles/global';
import { styles } from './styles';
import { paste } from '../../../assets/img/icons';

const Cards = () => {

  return (
    <View style={styles.cardsContainer}>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardInfoContainer}>
            <Image source={paste} style={styles.image} />
            <Text style={[commonStyles.titleText, styles.cardInfo]}>Vagas compatíveis</Text>
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.cardInfoContainer}>
            <Image source={paste} style={styles.image} />
            <Text style={[commonStyles.titleText, styles.cardInfo]}>Todas as vagas</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cards;