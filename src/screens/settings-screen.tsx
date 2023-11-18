import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { ImageBackground, Switch, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { generateStyles } from '@/styles';

// Import the image file
const backgroundImage = require('../../assets/background.png');

const SettingsScreen = () => {
  // Load Styles ----------------------------
  const { colorScheme, toggleColorScheme } = useColorScheme();
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
          <Text style={styles.mainText}>Settings</Text>
          <Text style={styles.text}>Information...</Text>
          <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
          <Button title="Test 1" />
          <Button title="Test 2" />
          <Button title="Test 3" />
        </View>
      </ImageBackground>
    </View>
  );
};
export default SettingsScreen;
