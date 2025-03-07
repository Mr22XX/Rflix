import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';


const data = [
  {
    id: '1',
    title: 'Joker',
    description: 'Film thriller psikologis terbaik.',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/joker.dc9b8728786051564b2a.jpg',
  },
  {
    id: '2',
    title: 'Avatar',
    description: 'Keindahan dunia Pandora.',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/avatar.1d982ace00b374ea69a4.jpg',
  },
  {
    id: '3',
    title: 'Fast & Furious',
    description: 'Film aksi dengan kecepatan tinggi.',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/fst.6b39921f5fe129000dae.jpg',
  },
  {
    id: '4',
    title: 'Ip Man',
    description: 'Film aksi Kung Fu Master',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/ipman.7e5ac2617ad505a8410a.jpg',
  },
  {
    id: '4',
    title: 'Ip Man',
    description: 'Film aksi Kung Fu Master',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/ipman.7e5ac2617ad505a8410a.jpg',
  },
  {
    id: '4',
    title: 'Ip Man',
    description: 'Film aksi Kung Fu Master',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/ipman.7e5ac2617ad505a8410a.jpg',
  },
  {
    id: '4',
    title: 'Ip Man',
    description: 'Film aksi Kung Fu Master',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/ipman.7e5ac2617ad505a8410a.jpg',
  },
  {
    id: '4',
    title: 'Ip Man',
    description: 'Film aksi Kung Fu Master',
    image: 'https://mr22xx.github.io/RayhanFilms/static/media/ipman.7e5ac2617ad505a8410a.jpg',
  },
];

export default function populer() {
  return (
    <View style={styles.container}>
       {data.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
    padding: 10,
    height:'auto',
    overflow:'scroll',
    flexDirection:'row',
    gap:30,
    justifyContent:'center',
    flexWrap: 'wrap'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden', // Agar gambar tidak keluar dari card
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 15,
    width: '20%', 
  },
  cardImage: {
    width: '100%',
    height: 500, 
  },
  cardContent: {
    padding: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
