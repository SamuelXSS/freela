import React from 'react';
import { TextInput } from 'react-native-paper';
import { View, Image, TouchableOpacity } from 'react-native';
import { commonStyles, colors } from '../../assets/styles/global';
import { inputIcon, close } from '../../assets/img/icons';
import styles from './styles';

const Input = ({ label, textValue, color, textColor, placeholder, setText, isPass, keyboardType, style }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[style, { zIndex: 0 }]}
        label={label}
        placeholder={placeholder.text}
        selectionColor={color}
        underlineColor={color}
        underlineColorAndroid={color}
        value={textValue}
        secureTextEntry={isPass}
        keyboardType={keyboardType}
        onChangeText={textValue => setText(textValue)}
        theme={
          {
            colors: {
              text: textColor || colors.black,
              background: "transparent",
              primary: color,
              placeholder: placeholder.color || colors.black
            },
            fonts: {
              regular: commonStyles.regularText,
              light: commonStyles.lightText,
              medium: commonStyles.mediumText,
              thin: commonStyles.thinText
            }
          }
        }
      />
      <TouchableOpacity style={{ zIndex: 2 }}>
        <Image source={close} style={styles.icon1} />
      </TouchableOpacity>
      <TouchableOpacity style={{ zIndex: 2 }}>
        <Image source={inputIcon} style={styles.icon2} />
      </TouchableOpacity>
    </View>
  )
}

export default Input;