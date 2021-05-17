import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { bell, chat } from '../../../assets/img/icons';
import { commonStyles } from '../../../assets/styles/global';
import socketIOClient from 'socket.io-client';


const ENDPOINT = 'http://192.168.18.19:3001';

const Footer = ({ navigation }) => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log(socket)
    socket.on('connection', data => {
      console.log('conectado', data)
      setResponse(data);
    });
  }, []);

  const goChat = () => {
    navigation.navigate('Chat');
  }

  return (
    <View style={styles.cardsContainer}>
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={bell} style={styles.image} />
            <Text style={[commonStyles.regularLabelText, styles.notify]}>{response}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={goChat}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={chat} style={styles.image} />
            <Text style={[commonStyles.regularLabelText, styles.notify]}>99+</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;