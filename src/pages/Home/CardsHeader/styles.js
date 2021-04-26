import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    zIndex: 10,
    width: windowWidth,
    marginTop: -50
  },
  button: {
    width: 130,
    height: 100,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ECF4FF',
    marginLeft: 20,
    borderRadius: 6,
    elevation: 8
  },
  buttonText: {
    color: '#505C6D',
    width: '100%'
  },
  buttonValue: {
    color: '#505C6D',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default styles;