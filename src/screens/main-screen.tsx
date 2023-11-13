import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const MainScreen = () => (
  <View className="flex-1 items-center justify-center">
    <Text>This is the main screen</Text>
    <Link href="/settings-screen">Open Sttings</Link>
  </View>
);

export default MainScreen;
