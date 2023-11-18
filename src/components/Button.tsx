import { useColorScheme } from 'nativewind';
import { Text, TouchableOpacity, View } from 'react-native';

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
    <TouchableOpacity onPress={onPress} style={styles.buttonOpacity}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

interface ButtonContainerProps {
  children: React.ReactNode;
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
}: ButtonContainerProps) => {
  // Load Styles ----------------------------
  const { colorScheme } = useColorScheme();
  const styles = generateStyles(colorScheme);
  // ----------------------------

  return <View style={styles.buttonContainer}>{children}</View>;
};
