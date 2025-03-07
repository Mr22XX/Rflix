import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {backgroundColor : '#9e58e8'},
        headerTintColor:'#fff',
        headerShadowVisible: false
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Litera' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}


