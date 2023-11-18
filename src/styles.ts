import { StyleSheet } from 'react-native';

export const generateStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#FDF9D9' : '#FDF9D9',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    imageStyle: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'space-between',
    },
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    text: {
      fontSize: 20,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    mainText: {
      fontSize: 40,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    buttonOpacity: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '13%',
      width: '60%',
      marginTop: 15,
      borderRadius: 30,
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0)',
      backgroundColor: colorScheme === 'dark' ? '#3A8D71' : '#3A8D71',
    },
    buttonText: {
      fontSize: 25,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    safeArea: {
      flex: 1,
      marginTop: 50,
      justifyContent: 'space-between',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20,
      justifyContent: 'space-between',
    },
  });
};
