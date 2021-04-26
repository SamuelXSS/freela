import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../assets/styles/global';

const cardTextColor = '#484848';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardsContainer: {
    width: '100%',
    marginBottom: 100 
  },
  image: {
    marginLeft: 20,
    marginRight: 20,
  },
  card: {
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 95,
    borderRadius: 20,
    elevation: 3,
    marginBottom: 8,
  },
  cardContent: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center'
  },
  cardInfo: {
    color: cardTextColor,
  },
  cardInfoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  }
});

export { styles, windowWidth };