import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/FontAwesome6';

const Tab = createMaterialTopTabNavigator();

import axios from 'axios';

// components
import Home from './Home';

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: searchQuery,
          apiKey: '4c45af80b8b349dc860311d6d8870d7b',
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching news:', error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetchNews();
    }
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Icon
              name="circle-arrow-left"
              size={24}
              color={'#fff'}
              style={styles.backButton}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Search News</Text>
        </View>

        <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#fff"
            onChangeText={text => setSearchQuery(text)}
          />
          <Button
            title="Search"
            onPress={fetchNews}
            style={styles.searchButton}
          />
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          <FlatList
            data={news}
            keyExtractor={item => item.title}
            renderItem={({item}) => (
              <View style={styles.newsPost}>
                <View style={styles.postContent}>
                  <Text style={styles.newsHeader}>{item.title}</Text>
                  <Text style={styles.newsDetails}>
                    {item.content}
                    <TouchableOpacity
                      onPress={async () => {
                        const url = item.url;
                        const supported = await Linking.openURL(url);

                        if (supported) {
                          await Linking.openURL(url);
                        } else {
                          console.error("Don't know how to open URI: " + url);
                        }
                      }}>
                      <Text style={styles.readMore}>Read more</Text>
                    </TouchableOpacity>
                  </Text>
                  <Text style={styles.newsDate}>{item.publishedAt}</Text>
                </View>
                <View style={styles.postImage}>
                  <Image style={styles.img} source={{uri: item.urlToImage}} />
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#340E45',
    height: '100%',
    paddingVertical: 20,
  },
  container: {
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: '#60D338',
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 20,
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -50}],
  },
  newsHeader: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDetails: {
    color: '#fff',
    marginBottom: 5,
  },
  newsDate: {
    color: '#fff',
    fontWeight: '300',
  },
  newsPost: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#5E5353',
    paddingBottom: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  postContent: {
    flex: 5,
  },
  postImage: {
    flex: 2,
  },
  img: {
    width: '100%',
  },
  readMore: {
    color: 'orange',
    textDecorationLine: 'underline',
  },
  searchInput: {
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 16,
    color: '#fff',
  },
  searchButton: {
    width: 10,
    backgroundColor: '#000',
    color: '#000',
  },
  header: {
    flexDirection: 'row',
  },
});
