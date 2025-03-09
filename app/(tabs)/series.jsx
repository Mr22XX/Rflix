import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, Dimensions, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`;

export default function Series() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    axios.get(API_URL)
      .then((response) => {
        setSeries(response.data.results);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <FlatList
          data={series}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'center', gap: 20, marginBottom: 20 }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/series/${item.id}`)}>
              <View style={styles.card}>
                <Image 
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                  style={styles.cardImage} 
                  resizeMode="cover" 
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                 
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
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
        width: width * 0.45,
    },
    cardImage: {
        width: '100%',
        height: 300,
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
