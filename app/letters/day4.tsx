import { ScrollView, Text } from 'react-native';

export default function Day4Screen() {
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
        Day 4 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Beautiful,

No matter where life takes us, I hope you always know this:

You have a home in my heart.

Whether we're together on a campus, in the same city, hundreds of miles apart, or sitting side by side years from now, there will never be a version of my life where you aren't important to me.

You've changed me in the best ways. You've taught me patience, understanding, and what it feels like to truly care about another person.

I don't know exactly what the future looks like. But I know that when I think about the people I want beside me as I walk into it, you're always there.

And that means more than I can ever put into words.

        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}