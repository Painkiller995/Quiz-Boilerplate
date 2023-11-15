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
    imageView: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    mainText: {
      fontSize: 40,
      color: colorScheme === 'dark' ? 'white' : 'white',
    },
    buttonContainer: {
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
  });
};
