import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />

      <Tabs.Screen
        name="letters"
        options={{ title: 'Letters' }}
      />

      <Tabs.Screen
        name="memories"
        options={{ title: 'Memories' }}
      />
    </Tabs>
  );
}