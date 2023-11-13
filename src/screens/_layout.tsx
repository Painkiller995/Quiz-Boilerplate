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
        name="settings-screen"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
