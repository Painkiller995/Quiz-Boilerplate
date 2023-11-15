import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="main-screen"
        options={{
          title: 'Main Screen',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="training-screen"
        options={{
          title: 'Training',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="quiz-screen"
        options={{
          title: 'Quiz',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings-screen"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about-screen"
        options={{
          title: 'About',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
