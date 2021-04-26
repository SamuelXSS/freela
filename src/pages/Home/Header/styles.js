import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/styles/global';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 50,
    width: '100%'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#3773d4',
    borderWidth: 1,
    borderColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  avatar: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default styles;