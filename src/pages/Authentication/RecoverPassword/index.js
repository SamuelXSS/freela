import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import { Input } from '../../../components';

import { close } from '../../../assets/img/icons';

import { commonStyles, colors } from '../../../assets/styles/global';
import styles from './styles.js';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [hasSentEmail, setHasSentEmail] = useState(false);

  const navigation = useNavigation();

  const handleGoBackToLogin = () => {
    navigation.goBack();
  }

  const handleSendEmail = () => {
    setHasSentEmail(true);
  };

  const handleChangeEmail = () => {
    setEmail('');
    setHasSentEmail(false);
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
      <TouchableOpacity onPress={handleGoBackToLogin} style={commonStyles.iconsSize}>
        <Image source={close} style={commonStyles.iconsSize} />
      </TouchableOpacity>

      <Text style={[commonStyles.titleText, styles.title]}>
        {!hasSentEmail ? 'Esqueci minha senha' : 'Verifique seu e-mail'}
      </Text>
      <Text style={[commonStyles.regularText, styles.session]}>
        {
          !hasSentEmail
            ? 'Digite seu e-mail para para que possamos recuperar sua senha.'
            : 'Por favor, redefina sua senha clicando no link enviado para o e-mail abaixo.\nCaso não encontre o e-mail na sua caixa de entrada, verifique a sua caixa de SPAM'
        }
      </Text>

      {
        !hasSentEmail ? (
          <>
            <Input
              style={styles.session}
              placeholder={{ text: '', color: '' }}
              text={email}
              label='E-mail'
              color={colors.gray}
              setText={setEmail}
            />

            <View style={styles.bottomButtonContainer}>
              <RectButton onPress={handleSendEmail} style={[commonStyles.primaryButton, styles.sendEmailButton]}>
                <Text style={commonStyles.buttonText}>Enviar</Text>
              </RectButton>
            </View>
          </>
        ) : (
          <>
            <View style={styles.session}>
              <Text style={[commonStyles.regularText, styles.emailText]}>{email}</Text>
              <TouchableOpacity onPress={handleChangeEmail} style={styles.changeEmailButton}>
                <Text style={[commonStyles.boldText, styles.changeEmailText]}>Trocar e-mail</Text>
              </TouchableOpacity>
            </View>

            <RectButton style={[styles.bottomButtonContainer, styles.bottomButton]}>
              <Text style={commonStyles.regularText}>Não recebeu o e-mail? Reenviar e-mail.</Text>
            </RectButton>
          </>
        )
      }
    </KeyboardAvoidingView>
  )
}

export default RecoverPassword;