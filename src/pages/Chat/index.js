import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Input } from '../../components';

import { colors, commonStyles, img } from '../../assets/styles/global';
import styles from './styles.js';

const Chat = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Image source={img.logo} style={styles.logo} />

        <View style={styles.ChatForm}>
          <Input
            placeholder={{ text: '', color: '' }}
            text={email}
            style={{marginBottom: 20}}
            label='E-mail'
            color={colors.gray}
            setText={setEmail}
          />

          <Input
            placeholder={{ text: '', color: '' }}
            text={pass}
            label='Senha'
            color={colors.gray}
            setText={setPass}
            isPass={!visiblePass}
          />
          <TouchableOpacity style={styles.showPassButton} onPress={handleVisiblePass}>
            <Icon
              name={visiblePass ? 'eye-slash' : 'eye'}
              size={20}
              color={colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={signIn} style={commonStyles.primaryButton}>
          <Text style={commonStyles.buttonText}>
            {logging ? <ActivityIndicator color='#FFFFFF' size={20} /> : 'Entrar'}
          </Text>
        </RectButton>
        <TouchableOpacity
          onPress={handlePressRecoverPassword}
          style={[commonStyles.secondaryButton, styles.forgotPassButton]}
        >
          <Text
            style={[styles.forgotPassText, commonStyles.regularLabelText]}
          >
            Esqueci minha senha
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={commonStyles.secondaryButton}>
        <Text style={commonStyles.regularLabelText}>Criar nova conta</Text>
      </TouchableOpacity>

      <View>
        <Text style={[commonStyles.boldLabelText, styles.bottomLabel]}>
          Desenvolvimento
          </Text>
        <View style={styles.imgContainer}>
          <Image source={img.unipamLogo} style={{ width: 120, height: 36 }} />
        </View>
      </View>
    </View >
  )
}

export default Chat;