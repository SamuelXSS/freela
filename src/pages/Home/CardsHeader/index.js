import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  myMan,
  business
} from '../../../assets/img/icons/index';

import { commonStyles } from '../../../assets/styles/global';
import styles from './styles';

const CardsHeader = () => {
  const options = [
    { id: 1, title: 'Jobs', value: 10, icon: myMan, route: '' },
    { id: 2, title: 'Matchs', value: 7, icon: business, route: 'Animals' }
  ];

  const navigation = useNavigation();

  const handleOptionPress = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.footer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {options.map((option, i) => {
          return (
            <TouchableOpacity
              key={option.id}
              onPress={() => handleOptionPress(option.route)}
              style={
                i === options.length - 1
                  ? [styles.button, { marginRight: 10 }]
                  : styles.button
              }
              activeOpacity={0.7}>
              <Image source={option.icon} style={commonStyles.iconsSize} />
              <Text style={[commonStyles.regularLabelText, styles.buttonValue]}>
                {option.value}
              </Text>
              <Text style={[commonStyles.regularLabelText, styles.buttonText]}>
                {option.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardsHeader;
