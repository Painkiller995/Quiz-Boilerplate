import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';

import { generateStyles } from '@/styles';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}
export const Button = ({ title, onPress }: ButtonProps) => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------

  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
