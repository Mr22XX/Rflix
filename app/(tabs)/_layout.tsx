import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#5d80f0',
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible:false,
        headerTintColor : '#ffff',
        tabBarStyle: {
          backgroundColor: '#25292e',
          },

      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="populer"
        options={{
          title: 'Popular',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'eye' : 'eye-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
