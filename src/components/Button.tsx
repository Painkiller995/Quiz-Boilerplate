import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity } from 'react-native';

import { generateStyles } from '@/styles';

interface ButtonProps {
  title: string;
  onClick?: () => void;
}
export const Button = ({ title, onClick }: ButtonProps) => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------

  return (
    <TouchableOpacity onPress={onClick} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
