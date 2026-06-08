import { Image, ScrollView, Text, View } from 'react-native';

export default function MemoriesScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 40,
      }}
    >
      <Text
        style={{
          color: '#89CFF0',
          fontSize: 32,
          fontWeight: 'bold',
          marginBottom: 25,
        }}
      >
        📸 Our Memories
      </Text>

      {/* Graduation */}
      <View style={{ marginBottom: 35 }}>
        <Image
          source={require('../../assets/images/together.jpg')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: 600,
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 15,
          }}
        >
          One of us is a graduate! 🎓
        </Text>
      </View>

      {/* November */}
      <View style={{ marginBottom: 35 }}>
        <Image
          source={require('../../assets/images/nov.jpg')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: 600,
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 15,
            lineHeight: 28,
          }}
        >
          The start of our journey together, as partners and not just
          friends. I still remember how your smile lit up the whole room.
        </Text>
      </View>

      {/* Wisconsin Dells */}
      <View>
        <Image
          source={require('../../assets/images/dells.jpg')}
          resizeMode="contain"
          style={{
            width: '100%',
            height: 600,
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            color: 'white',
            fontSize: 20,
            marginTop: 15,
            lineHeight: 28,
          }}
        >
          Still one of my favorite memories 💙
        </Text>
      </View>
    </ScrollView>
  );
}