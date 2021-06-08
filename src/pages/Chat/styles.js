import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  header: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 110,
    top: 0,
    backgroundColor: '#4D83D3'
  },
  icon: {
    marginLeft: 10
  },
  avatar: {
    marginLeft: 50,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
  },
  formContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 100,
    marginBottom: 80,
    width: 250,
    height: 50
  },
  send: {
    alignSelf: 'center'
  },
  chatContainer: {
    height: '68%',
    marginTop: -50,
    width: '100%'
  },
  chatForm: {
    height: '68%',
    width: '100%',
    marginTop: -70,
    marginBottom: 80,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  yourBaloon: {
    height: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 20,
    width: '90%'
  },
  otherBaloon: {
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 20,
    width: '90%'
  },
  otherMessage: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    width: '50%',
    marginVertical: 5,
    padding: 12,
    borderRadius: 70,
    backgroundColor: '#000000',
  },
  
  otherMessageContainer: {
    width: Dimensions.get('window').width - 40,
    justifyContent: 'flex-start'
  },
  yourMessage: {
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginVertical: 5,
    padding: 12,
    borderRadius: 70,
    backgroundColor: '#4D83D3',
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    bottom: 0
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