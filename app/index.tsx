import { Text, View,  StyleSheet, ImageBackground } from 'react-native';

export default function Index() {
  return (
      <ImageBackground
      source={{uri: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
      style={styles.Background}
      >  
      <Text style={styles.text}>Selamat Datang Di <Text style={styles.text_span}>Litera</Text> </Text>
      <Text style={{color:'#fff'}}>"Tempat Membaca dan Belajar Tentang Coding"</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Background : {
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center', 
    alignItems : 'center',
  },
  text: {
    color: '#fff',
    textAlign:'center',
    fontSize: 30,
  },
  text_span:{
    color:'#9e58e8',
  }
});
