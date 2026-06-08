import { ScrollView, Text } from 'react-native';

export default function Day10Screen() {
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
        Day 10 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

        This is where you can come whenever you need a little reminder of how much I love you.

        I wanted to build something special for you,
        something you could open whenever you miss me.

        Every letter in this app is another reminder
        of how much you mean to me. I can't wait for you to read them all my love.

        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}