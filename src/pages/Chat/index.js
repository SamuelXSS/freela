import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Input } from '../../components';

import { colors, img } from '../../assets/styles/global';
import styles from './styles.js';
import api from '../../services/appApi';


function Chat() {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState();
  const scrollViewRef = useRef();

  useEffect(() => {
    async function listMessages() {
      const messages = await api.get('/messages');
      setMessages(messages.data.messageArray);
    }
    setInterval(() => { listMessages() }, 500)
  }, [])

  const sendMessage = async () => {
    await api.post('/message', { user: 'You', message: text })
    setMessages([...messages, {
      user: 'You',
      message: text,
    }])
  }


  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={img.logo} style={styles.logo} />
        <View style={styles.header}>
          <Icon
            name={'long-arrow-alt-left'}
            size={30}
            color={colors.white}
            style={styles.icon}
          />
          <View style={styles.avatar}>
            <Text style={{ color: '#fff' }}>SX</Text>
          </View>
          <Text style={{ color: '#fff' }}>Samuel Ximenes</Text>
        </View>
        <View style={styles.chatForm}>
          <ScrollView ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
            style={styles.chatContainer}
          >
            <View style={styles.yourBaloon}>
              {messages && messages.map((x, index) => (
                <View key={index} >
                  {x.user === 'You' ? (
                    <Text style={styles.yourMessage}>{x.message}</Text>
                  ) : (
                    <View style={styles.otherMessageContainer} >
                      <Text style={styles.otherMessage}>{x.message}</Text>
                    </View>
                  )}

                </View>
              ))}
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <Input
            placeholder={{ text: '', color: '' }}
            text={text}
            label='Digite uma mensagem'
            color={colors.gray}
            setText={setText}
            style={{ width: '85%' }}
          />
          <TouchableOpacity onPress={sendMessage}>
            <Icon
              name={'paper-plane'}
              size={20}
              color={'#000'}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>
      </View>

    </View >
  )
}

export default Chat;