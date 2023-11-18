import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Button, ButtonContainer } from '@/components/button';
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
        <SafeAreaView style={styles.safeArea}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.mainText}>QuizScreen</Text>
            <ButtonContainer>
              <Button title="test" />
              <Button title="test" />
              <Button title="test" />
              <Button title="test" />
            </ButtonContainer>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default QuizScreen;
