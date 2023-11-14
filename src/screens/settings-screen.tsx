import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

const SettingsScreen = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center dark:bg-neutral-700">
      <View className="flex-row items-center justify-center space-x-2" />
      <Text className="text-xl dark:text-white">Toggle Theme</Text>
      <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
    </View>
  );
};
export default SettingsScreen;
