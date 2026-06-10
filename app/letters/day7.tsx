import { ScrollView, Text } from 'react-native';

export default function Day7Screen() {
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
        Day 7 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

        If you ever have one of those days where you're doubting yourself, I want you to read this.

You are intelligent.

You are kind.

You are stronger than you realize.

You care deeply about the people around you, and that is one of the things I admire most about you.

Sometimes we're the last people to recognize our own worth. So if you ever forget, borrow my eyes for a moment.

I promise you'll see someone incredible.
        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}