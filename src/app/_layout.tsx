import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6A5ACD',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'GeoQuiz',
        }}
      />
      <Stack.Screen
        name="cheat"
        options={{
          title: 'GeoQuiz',
        }}
      />
    </Stack>
  );
}
