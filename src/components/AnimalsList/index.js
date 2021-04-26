import React from 'react';
import {Text, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {commonStyles} from '../../assets/styles/global';
import {Avatar} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {edit, info} from '../../assets/img/icons';

const AnimalsList = ({number, identify, lot, size}) => {
  const navigation = useNavigation();

  const handleSelect = () => {
    navigation.navigate('AnimalIdentifyCode');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar.Text
          size={42}
          style={[styles.serial, {fontSize: 10}]}
          theme={{fonts: {light: commonStyles.bold}}}
          label={number}
        />
        <View style={styles.main}>
          <View style={styles.infos}>
            <Text style={commonStyles.regularText}>{identify} | </Text>
            <Text style={commonStyles.regularText}>{lot} | </Text>
            <Text style={commonStyles.regularText}>{size}Kg</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Image style={[styles.icon, {marginRight: 4}]} source={info} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.icon} source={edit} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomLine} />
    </View>
  );
};

export default AnimalsList;
