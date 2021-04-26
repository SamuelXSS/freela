import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../assets/styles/global';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%'
  },
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%'
  },
  infos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end'
  },
  icon: {
    height: 22,
    width: 22,
    alignSelf: 'flex-end'
  },
  serial: {
    backgroundColor: '#fff',
    borderWidth: 0.6,
    marginRight: 15,
    borderColor: '#C8C8C9',
    fontWeight: 'bold',
    fontFamily: 'ProductSansBold'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginRight: 15,
    width: 40,
    height: 40,
    borderWidth: 0.6,
    borderColor: '#707070',
    borderRadius: 100
  },
  bottomLine: {
    width: '100%',
    marginTop: 5,
    marginBottom: 9,
    borderColor: '#E1E1E1',
    borderWidth: 1
  },
  imageContainerSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginRight: 15,
    width: 40,
    height: 40,
    borderWidth: 0.6,
    borderColor: colors.secondary,
    borderRadius: 100
  },
  imageSelected: {
    width: 20,
    height: 20
  },
  bottomLineSelected: {
    width: '100%',
    marginTop: 5,
    marginBottom: 9,
    borderColor: colors.secondary,
    borderWidth: 1
  }
});

export default styles;