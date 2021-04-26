import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../assets/styles/global';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 50
  },
  title: {
    marginTop: 50
  },
  session: {
    marginTop: 24
  },
  emailText: {
    color: colors.secondary,
  },
  changeEmailButton: {
    borderWidth: 0,
    width: 140
  },
  changeEmailText: {
    textTransform: 'uppercase',
    color: colors.primary
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendEmailButton: {
    marginBottom: 30
  },
  bottomButton: {
    backgroundColor: '#EAEAEA',
    height: 50,
  },
});

export default styles;