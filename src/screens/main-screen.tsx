import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { ImageBackground, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { generateStyles } from '@/styles';

// Import the image file
const backgroundImage = require('../../assets/background.png');

const MainScreen = () => {
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
          <Text style={styles.mainText}>Main Screen</Text>
          <Link href="training-screen" asChild>
            <Button title="Training" />
          </Link>
          <Link href="quiz-screen" asChild>
            <Button title="Quiz" />
          </Link>
          <Link href="settings-screen" asChild>
            <Button title="Settings" />
          </Link>
          <Link href="about-screen" asChild>
            <Button title="About" />
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
};
export default MainScreen;
