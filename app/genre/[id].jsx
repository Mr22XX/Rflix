import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { useRouter, useLocalSearchParams, useNavigation } from 'expo-router';

const { width } = Dimensions.get('window');

export default function MoviesByGenre() {
  const { id } = useLocalSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genreName, setGenreName] = useState(''); // Menyimpan nama genre
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    // Ambil daftar film berdasarkan genre
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&with_genres=${id}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    // Ambil daftar genre untuk mendapatkan nama genre berdasarkan id
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((response) => {
        const genre = response.data.genres.find((g) => g.id.toString() === id);
        if (genre) {
          setGenreName(genre.name);
          navigation.setOptions({ title: genre.name }); // Update judul header
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'center', gap: 20, marginBottom: 20 }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          ListHeaderComponent={
            <Text style={styles.title}>{genreName || 'Movies'}</Text>
          }
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/movies/${item.id}`)}>
              <View style={styles.card}>
                <Image 
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                  style={styles.cardImage} 
                  resizeMode="cover" 
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    paddingVertical: 10,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: width * 0.4,
  },
  cardImage: {
    width: '100%',
    height: 250,
  },
  cardContent: {
    padding: 10,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    color: '#555',
    textAlign: 'center',
  },
});
