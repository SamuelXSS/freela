import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    marginBottom: 80,
    width: 250,
    height: 50
  },
  loginForm: {
    width: '90%',
    marginBottom: 30
  },
  showPassButton: {
    marginTop: -37,
    marginRight: 15,
    alignSelf: 'flex-end',
    zIndex: 10
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%'
  },
  forgotPassButton: {
    marginVertical: 10,
    borderWidth: 0
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  bottomLabel: {
    fontSize: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 4
  }
});

export default styles;