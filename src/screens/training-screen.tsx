import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { useEffect, useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { Button, ButtonContainer } from '@/components/button';
import questions from '@/data-provider';
import { generateStyles } from '@/styles';
import type { QuestionProps } from '@/types/types';
// Import the image file
const backgroundImage = require('../../assets/background.png');

const TrainingScreen = () => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------
  const [currentQuestion, setCurrentQuestion] = useState<QuestionProps>();

  useEffect(() => {
    setCurrentQuestion(questions[0]);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <ImageBackground
        source={backgroundImage}
        style={styles.image}
        blurRadius={4}
      >
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subContainer}>
              <Text style={styles.secondaryText}>
                {currentQuestion?.question}
              </Text>
              <ButtonContainer>
                {currentQuestion?.answers.map((answer) => (
                  <Button key={answer.id} title={answer.text} />
                ))}
              </ButtonContainer>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
export default TrainingScreen;
