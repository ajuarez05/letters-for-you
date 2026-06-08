import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();

      // Next letter unlocks at midnight
      const nextUnlock = new Date();
      nextUnlock.setHours(24, 0, 0, 0);

      const difference = nextUnlock.getTime() - now.getTime();

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft(`${hours}h ${minutes}m`);
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 32,
          color: '#89CFF0',
          fontWeight: 'bold',
        }}>
        🩵 My Love 🩵
      </Text>

      <Text
        style={{
          marginTop: 20,
          color: 'white',
          fontSize: 18,
        }}>
        A letter for Jasmine
      </Text>

      <Text
        style={{
          marginTop: 50,
          color: '#89CFF0',
          fontSize: 24,
          fontWeight: 'bold',
        }}>
        Next Letter Unlocks In
      </Text>

      <Text
        style={{
          marginTop: 10,
          color: 'white',
          fontSize: 32,
          fontWeight: 'bold',
        }}>
        {timeLeft}
      </Text>
    </View>
  );
}