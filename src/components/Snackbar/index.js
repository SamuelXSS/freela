import Snackbar from 'react-native-snackbar';

const Popup = (text, type) => {
    return Snackbar.show({
        text,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: type === 'error' ? '#fa1e3c' : type === 'success' ? '#00b300' : '#F29200'
    });
}

export default Popup;