import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Text, View } from 'react-native';

import { generateStyles } from '@/styles';

const MainScreen = () => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------
  return (
    <View style={styles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Text style={styles.mainText}>Main Screen</Text>
      <Link href="settings-screen">Go to Settings</Link>
    </View>
  );
};
export default MainScreen;
