import { Text, View, StyleSheet,ImageBackground } from 'react-native';

export default function Index() {
  return (
    <ImageBackground 
      source={{uri:"https://github.com/Mr22XX/RayhanFilms1/blob/main/src/assets/images/bg/main.jpg?raw=true"}}
      style={styles.container}
    >
      <Text style={styles.text}>Welcome To Rflix</Text>
      <Text style={styles.text_p}>"Film Directory For Anyone"</Text>
    </ImageBackground>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'Helvetica',
    fontWeight:'bold',
    textShadowColor: "black", 
    textShadowOffset: { width: 5, height: 2 }, 
    textShadowRadius: 2, 
    position:'absolute',
    top:150
    
  },
  text_p: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
    position:'absolute',
    top:200
    
  },
 
});
