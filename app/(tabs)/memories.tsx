import { Image, ScrollView, Text } from 'react-native';

export default function MemoriesScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
      contentContainerStyle={{
        padding: 20,
      }}
    >
      <Text
        style={{
          color: '#89CFF0',
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 25,
        }}
      >
        📸 Our Memories
      </Text>

      <Image
        source={require('../../assets/images/together.jpg')}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 20,
        }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          marginTop: 15,
        }}
      >
        One of us is a graduate!
      </Text>

      <Image
        source={require('../../assets/images/nov.jpg')}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 20,
          marginTop: 30,
        }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          marginTop: 15,
        }}
      >
        The start of our journey together, as partners; not friends. I still
        remember how your smile lit up the whole place.
      </Text>

      <Image
        source={require('../../assets/images/dells.jpg')}
        style={{
          width: '100%',
          height: 400,
          borderRadius: 20,
          marginTop: 30,
        }}
      />

      <Text
        style={{
          color: 'white',
          fontSize: 18,
          marginTop: 15,
          marginBottom: 40,
        }}
      >
        Still one of my favorite memories 💙
      </Text>
    </ScrollView>
  );
}