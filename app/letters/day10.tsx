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
If this is the last letter in the collection, then there's only one thing left to say.

Thank you for being part of my story.

No matter what adventures are ahead of us, these memories will always matter to me. Every laugh, every drive, every conversation, every moment that helped create the relationship we have today.

I made this because I wanted you to have something you could revisit whenever you wanted—a reminder of how much you mean to me.

And if you read every single letter, then thank you for that too.

I love you.

Always.
        Love,
        Alexa ❤️
      </Text>
    </ScrollView>
  );
}