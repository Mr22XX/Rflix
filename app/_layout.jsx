import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#25292e' }, // Ubah warna background header
        headerTintColor: '#fff', // Ubah warna teks header jadi putih
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movie/[id]" options={{ title: "Detail Film" }} />
    </Stack>
  );
}
