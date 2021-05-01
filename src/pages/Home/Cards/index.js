import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../../../assets/styles/global';
import { styles } from './styles';
import { paste } from '../../../assets/img/icons';

const Cards = () => {
  const navigation = useNavigation();

  const handleGoToJobsList = (filter) => {
    navigation.navigate('JobsList', { filter });
  };

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => handleGoToJobsList('filtered')}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardInfoContainer}>
            <Image source={paste} style={styles.image} />
            <Text style={[commonStyles.titleText, styles.cardInfo]}>
              Vagas compatíveis
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => handleGoToJobsList('all')}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardInfoContainer}>
            <Image source={paste} style={styles.image} />
            <Text style={[commonStyles.titleText, styles.cardInfo]}>Todas as vagas</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Cards;
