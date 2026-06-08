import { ScrollView, Text } from 'react-native';

export default function Day2Screen() {
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
        Day 2 💌
      </Text>

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          lineHeight: 30,
        }}>
        My dear dumpling,

            If there's one thing I hope you never forget, it's how proud I am of you, not because of your grades, your accomplishments, or the things other people can see. 
            I'm proud of the person you are when nobody is watching. I'm proud of your kindness. The way you care so deeply.
            The way you keep going even when things feel heavy. I know you don't always give yourself enough credit.

            You inspire me more than you know. 
        
        
            Thank you for being exactly who you are.
    


        Love,
        Totopos ❤️
      </Text>
    </ScrollView>
  );
}