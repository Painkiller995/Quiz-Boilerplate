import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const generateStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#FDF9D9' : '#FDF9D9',
    },

    subContainer: {
      flex: 1,
      padding: 10,
      alignItems: 'center',
    },

    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    imageStyle: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'space-between',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },

    text: {
      fontSize: 20,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    mainText: {
      fontSize: 40,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    secondaryText: {
      paddingTop: 0,
      paddingBottom: 10,
      fontSize: 18,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },

    buttonOpacity: {
      alignItems: 'center',
      justifyContent: 'center',
      height: windowHeight / 12,
      width: windowWidth / 1.5,
      margin: '5%',
      backgroundColor: colorScheme === 'dark' ? '#3A8D71' : '#3A8D71',
      borderRadius: 30,
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0)',
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 25,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
  });
};
