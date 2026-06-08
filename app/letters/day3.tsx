import { ScrollView, Text } from 'react-native';
export default function Day3Screen() {
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
        Day 3 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        My Baby,
        
        One of my favorite things about loving you is that even ordinary moments become memories. 
        A random stop for a drink.
        A conversation that starts with something silly and somehow turns into something important. 


        If someone asked me what my favorite day with you was, I don't think I could answer. Because the truth is that my favorite memories aren't always the big moments. 
        They're the little ones. The moments that seem insignificant at the time but somehow become the memories I revisit the most. 
        
          Thank you for filling my life with moments worth remembering. I can't wait to make a thousand more with you.


        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}