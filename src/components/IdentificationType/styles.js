import { StyleSheet } from 'react-native';
import { colors, commonStyles } from '../../assets/styles/global';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%'
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
    image: {
        width: 20,
        height: 20
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