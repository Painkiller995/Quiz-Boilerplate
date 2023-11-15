import { StyleSheet } from 'react-native';

export const generateStyles = (colorScheme: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    },
    mainText: {
      fontSize: 40,
      color: colorScheme === 'dark' ? 'red' : 'blue',
    },
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorScheme === 'dark' ? '#333' : '#fff',
    },
    buttonText: {
      fontSize: 40,
      color: colorScheme === 'dark' ? 'red' : 'blue',
    },
  });
};
