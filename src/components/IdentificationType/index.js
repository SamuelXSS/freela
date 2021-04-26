import React from 'react';
import {Text, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {commonStyles, colors} from '../../assets/styles/global';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IdentificationType = ({icon, label, style}) => {
  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate('AnimalIdentifyCode', {
      label,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSelect}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image style={[styles.image, style]} source={icon} />
          </View>
          <Text style={commonStyles.boldText}>{label}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.bottomLine} />
    </View>
  );
};

export default IdentificationType;
