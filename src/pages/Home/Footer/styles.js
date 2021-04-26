import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  card: {
    height: 60,
    width: 60,
    marginLeft: 20,
    marginRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 60,
  },
  notify: {
    position: 'absolute',
    fontWeight: 'bold',
    top: -15,
    right: -30,
    backgroundColor: '#FF2020',
    color: '#fff',
    borderRadius: 100,
    padding: 5
  }
});

export { styles, windowWidth };