import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Platform } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { TMDB_API_KEY } from '@env';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';

export default function SeriesDetail() {
  const { id } = useLocalSearchParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoKey, setVideoKey] = useState(null);
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    // Fetch detail series
    axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((response) => {
        setSeries(response.data);
        navigation.setOptions({
          title: response.data.name,
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push('/series')} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
          ),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

    // Fetch trailer series
    axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`)
      .then((response) => {
        const trailer = response.data.results.find((video) => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) {
          setVideoKey(trailer.key);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <ScrollView style={styles.container}>
      {series && (
        <>
          <Image 
            source={{ uri: `https://image.tmdb.org/t/p/w500${series.poster_path}` }} 
            style={styles.image} 
          />
          <Text style={styles.title}>Description : </Text>
          <Text style={styles.overview}>{series.overview || "There is no Description"}</Text>

          {/* Trailer Section */}
          <Text style={styles.title_trailer}>Trailer</Text>
          {videoKey ? (
            Platform.OS === 'web' ? (
              <View style={styles.videoContainer}>
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${videoKey}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </View>
            ) : (
              <WebView
                style={styles.videoContainer}
                source={{ uri: `https://www.youtube.com/embed/${videoKey}` }}
                allowsFullscreenVideo
              />
            )
          ) : (
            <Text style={styles.noVideoText}>Trailer tidak tersedia</Text>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
    textAlign: 'left',
  },
  title_trailer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 30,
    textAlign: 'left',
  },
  videoContainer: {
    marginVertical: 20,
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  noVideoText: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 10,
  },
  overview: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'justify',
  },
  backButton: {
    marginLeft: 10,
  },
});
