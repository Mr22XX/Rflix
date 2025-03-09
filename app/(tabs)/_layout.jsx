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
            <Ionicons name={focused ? 'home-outline' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="populer"
        options={{
          title: 'Popular',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'eye-outline' : 'eye-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="series"
        options={{
          title: 'series',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'tv-outline' : 'tv-outline'} color={color} size={24}/>
          ),
        }}
      />
      <Tabs.Screen
        name="genre"
        options={{
          title: 'Genre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'list-outline' : 'list-outline'} color={color} size={24}/>
          ),
        }}
      />
    </Tabs>
  );
}
