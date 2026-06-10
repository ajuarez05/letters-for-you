import { ScrollView, Text } from 'react-native';

export default function Day6Screen() {
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
        Day 6 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

        Thank you.

Thank you for every conversation, every memory, every laugh, and every moment of patience you've shown me.

Thank you for listening to me when I needed someone. Thank you for challenging me to become better. Thank you for showing me what it feels like to care about someone this much.

Relationships aren't built from grand gestures alone. They're built from thousands of little choices made every day.

Thank you for choosing us.

        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}