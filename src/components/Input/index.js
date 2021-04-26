import React from 'react';
import {TextInput} from 'react-native-paper';
import {commonStyles, colors} from '../../assets/styles/global';

const Input = ({
  label,
  textValue,
  color,
  textColor,
  placeholder,
  setText,
  isPass,
  keyboardType,
  style,
  disabled,
}) => {
  return (
    <TextInput
      style={style}
      label={label}
      placeholder={placeholder.text}
      selectionColor={color}
      underlineColor={color}
      underlineColorAndroid={color}
      value={textValue}
      secureTextEntry={isPass}
      keyboardType={keyboardType}
      onChangeText={(textValue) => setText(textValue)}
      disabled={disabled ? disabled : false}
      theme={{
        colors: {
          text: textColor || colors.black,
          background: 'transparent',
          primary: color,
          placeholder: placeholder.color || colors.black,
        },
        fonts: {
          regular: commonStyles.regularText,
          light: commonStyles.lightText,
          medium: commonStyles.mediumText,
          thin: commonStyles.thinText,
        },
      }}
    />
  );
};

export default Input;
