import { StyleSheet } from 'react-native';
import pecuariaLogo from '../img/ps-logo.png';
import unipamLogo from '../img/unipam-logo.png';

const colors = {
  primary: '#4D83D3',
  secondary: '#448C5F',
  black: '#000000',
  gray: '#707070',
  white: '#ffffff',
};

const fonts = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
  logo: 'PermanentMarker-Regular'
};

const img = {
  pecuariaLogo,
  unipamLogo,
};

const TITLE_TEXT_FONT_SIZE = 28.75;
const REGULAR_TEXT_FONT_SIZE = 14;
const FIELD_TEXT_FONT_SIZE = 24.25;
const LABEL_TEXT_FONT_SIZE = 12.5;

const commonStyles = StyleSheet.create({
  logo: {
    fontFamily: fonts.logo,
    fontSize: 40,
    lineHeight: 52,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4D83D3',
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: colors.black,
  },
  regularText: {
    fontFamily: fonts.regular,
    fontSize: REGULAR_TEXT_FONT_SIZE,
    color: colors.black,
  },
  boldWhiteText: {
    fontFamily: fonts.bold,
    fontSize: REGULAR_TEXT_FONT_SIZE,
    color: colors.white,
  },
  boldText: {
    fontFamily: fonts.bold,
    fontSize: REGULAR_TEXT_FONT_SIZE,
    color: colors.black,
  },
  fieldText: {
    fontFamily: fonts.regular,
    fontSize: FIELD_TEXT_FONT_SIZE,
    color: colors.black,
  },
  boldLabelText: {
    fontFamily: fonts.bold,
    fontSize: LABEL_TEXT_FONT_SIZE,
    color: colors.primary,
  },
  regularLabelText: {
    fontFamily: fonts.regular,
    fontSize: LABEL_TEXT_FONT_SIZE,
    color: colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: fonts.regular,
    fontSize: REGULAR_TEXT_FONT_SIZE,
    color: colors.white,
  },
  iconsSize: {
    height: 20,
    width: 20,
  },
  primaryButton: {
    height: 45,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    width: '50%',
  },
  secondaryButton: {
    height: 45,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width: '50%',
  },
  nextButton: {
    height: 45,
    padding: 20,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    width: '90%',
  },
});

export { colors, fonts, img, commonStyles };
