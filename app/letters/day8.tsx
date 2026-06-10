import { ScrollView, Text } from 'react-native';

export default function Day8Screen() {
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
        Day 8 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

       It's funny how a single day can end up changing so much.

When we first met, I had no idea that one day you'd become one of the most important people in my life. I didn't know we'd spend hours talking, make memories together, and become such a huge part of each other's lives.

If I could go back and tell that version of myself what was coming, I don't think I'd believe it.

But I'm so glad it happened.

        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}