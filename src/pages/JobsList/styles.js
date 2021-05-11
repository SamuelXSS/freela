import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../assets/styles/global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    justifyContent: 'flex-end',
    backgroundColor: '#4D83D3',
    padding: 6,
  },
  content: {
    backgroundColor: '#FAFAFA',
    height: '84%',
    width: '100%',
    borderRadius: 26,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70,
    marginBottom: 18,
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  title: {
    fontSize: 18,
    color: colors.primary,
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7C7C7C',
  },
  main: {
    flex: 1,
    width: '100%',
  },
  section: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
  },
  textContainer: {
    width: '100%',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#7C7C7C',
    padding: 8,
  },
  text: {
    fontSize: 16,
    color: '#7C7C7C',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'space-between',
  },
});

export default styles;
