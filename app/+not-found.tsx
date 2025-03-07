import { View, StyleSheet, Image } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (

    <>
      <Stack.Screen options={{ title: 'Oops! Not Found', headerStyle: {backgroundColor: '#9e58e8'}, headerShadowVisible :false, headerTintColor:'#ffffff' }}  />
      <View style={styles.container}>
        <Image
        source={{uri:"https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"}}
        style={styles.gif}
        >
        </Image>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  gif: {
    width: 300, 
    height: 300,
  },
});
