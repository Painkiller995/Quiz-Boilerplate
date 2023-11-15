import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { ImageBackground, Text, View } from 'react-native';

import { generateStyles } from '@/styles';

// Import the image file
const backgroundImage = require('../../assets/background.png');

const QuizScreen = () => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------
  return (
    <View style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        blurRadius={4}
      >
        <View style={styles.imageView}>
          <Text style={styles.mainText}>QuizScreen</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
export default QuizScreen;
