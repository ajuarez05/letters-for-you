import { ScrollView, Text } from 'react-native';

export default function Day9Screen() {
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
        Day 9 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        Dear Jasmine,

        People always talk about their favorite songs, but I think my favorite sound is your laugh.

Not the polite laugh you give when something is mildly funny. The real one.

The one where you can't stop smiling afterward.

The one that makes everyone around you smile too.

Whenever I hear it, I know things are okay.

And I hope I get to spend many more years hearing it.

        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}