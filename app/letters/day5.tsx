import { ScrollView, Text } from 'react-native';

export default function Day5Screen() {
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
        Day 5 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

        I wonder where we'll be one year from now.

I don't know what challenges we'll face or what surprises life has waiting for us. What I do know is that no matter where we end up, I hope we're still making each other laugh, still learning about each other, and still choosing each other.

The future can feel uncertain sometimes, but you're one of the few things that makes it feel exciting instead of scary.

No matter what happens, I'm grateful that I get to experience this chapter of my life with you.

Love,
Alexa
      </Text>
    </ScrollView>
  );
}