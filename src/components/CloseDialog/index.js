import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import {colors, commonStyles} from '../../assets/styles/global';

const CloseDialog = ({gettingStarted, visible, setVisible}) => {
  const navigation = useNavigation();

  const hideDialog = () => setVisible(false);

  const handleConfirmClose = async () => {
    if (gettingStarted) {
      await AsyncStorage.setItem('gettingStarted', JSON.stringify(false));
    }

    setVisible(false);

    navigation.navigate('Home');
  };

  return (
    <View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{backgroundColor: '#fff'}}>
          <Dialog.Title style={commonStyles.fieldText}>
            {gettingStarted ? 'Fechar Tutorial' : 'Voltar ao Menu'}
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph style={[commonStyles.regularText, {fontSize: 16}]}>
              {gettingStarted
                ? 'Ao fechar o Tutorial, você será redirecionado ao Menu inicial.\nDeseja continuar?'
                : 'Deseja retornar ao Menu inicial?'}
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} color={colors.gray}>
              Cancelar
            </Button>
            <Button onPress={handleConfirmClose} color={colors.primary}>
              Continuar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CloseDialog;
