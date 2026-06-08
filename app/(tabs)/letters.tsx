import { router } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

export default function LettersScreen() {
const startDate = new Date('2026-06-07');

const today = new Date();

const daysPassed = Math.floor(
  (today.getTime() - startDate.getTime()) /
  (1000 * 60 * 60 * 24)
);

const letters = [
  { title: 'Day 1 💌', route: '/letters/day1' },
  { title: 'Day 2 💌', route: '/letters/day2' },
  { title: 'Day 3 💌', route: '/letters/day3' },
  { title: 'Day 4 💌', route: '/letters/day4' },
  { title: 'Day 5 💌', route: '/letters/day5' },
  { title: 'Day 6 💌', route: '/letters/day6' },
  { title: 'Day 7 💌', route: '/letters/day7' },
  { title: 'Day 8 💌', route: '/letters/day8' },
  { title: 'Day 9 💌', route: '/letters/day9' },
  { title: 'Day 10 💌', route: '/letters/day10' },
];
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
      contentContainerStyle={{
        padding: 25,
      }}>
      <Text
        style={{
          color: '#89CFF0',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 25,
        }}>
        Letters 💙
      </Text>

    {letters.map((letter, index) => {
  const unlocked = index <= daysPassed;

  return (
    <TouchableOpacity
      key={letter.route}
      disabled={!unlocked}
      onPress={() => router.push(letter.route as any)}
      style={{
        backgroundColor: '#111',
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        opacity: unlocked ? 1 : 0.4,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
        }}>
        {unlocked ? letter.title : `🔒 Day ${index + 1}`}
      </Text>
    </TouchableOpacity>
  );
})}
    </ScrollView>
  );
}