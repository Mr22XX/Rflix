import React, { useEffect, useState } from 'react';
import { 
  View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator, FlatList, Dimensions 
} from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function GenreScreen() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((response) => setGenres(response.data.genres))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#ff6600" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.genreList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.genreButton} 
            activeOpacity={0.7}
            onPress={() => router.push(`/genre/${item.id}`)}
          >
            <LinearGradient
              colors={['#ff6600', '#ff9900']}
              style={styles.gradient}
            >
              <Text style={styles.genreText}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  genreList: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    width: '100%',
  },
  genreButton: {
    width: width * 0.42,
    marginVertical: 10,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5, // Efek shadow di Android
    shadowColor: '#ff6600', // Efek shadow di iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  gradient: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
