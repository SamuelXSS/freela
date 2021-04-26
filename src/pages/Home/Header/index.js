import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Context } from '../../../contexts/Auth/AuthContext';

import { commonStyles } from '../../../assets/styles/global';
import styles from './styles';

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { handleLogout } = useContext(Context);

  const openMenu = () => {
    setVisible(true);
  };

  const closeMenu = () => {
    setVisible(false);
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Text style={commonStyles.logo} >Freela</Text>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{ top: 100 }}
          anchor={
            <TouchableWithoutFeedback
              onPress={openMenu}
              style={styles.profile}>
              <Text style={styles.avatar}>SX</Text>
            </TouchableWithoutFeedback>
          }>
          <Menu.Item onPress={() => { }} title="Perfil" />
          <Menu.Item onPress={() => { }} title="Configurações" />
          <Divider />
          <Menu.Item onPress={handleLogout} title="Sair" />
        </Menu>
      </View>
    </View>
  );
};

export default Header;
