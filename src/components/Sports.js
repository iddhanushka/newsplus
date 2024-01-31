import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Local(props) {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines',
          {
            params: {
              country: 'in',
              category: 'sports',
              apiKey: '4c45af80b8b349dc860311d6d8870d7b',
            },
          },
        );
        setLatestNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching latest news:', error.message);
      }
    };

    fetchLatestNews();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.headerTitle}>Sports news</Text>
          <FlatList
            data={latestNews}
            keyExtractor={item => item.id}
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
          <TouchableOpacity onPress={() => props.navigation.navigate('Search')}>
            <View style={styles.searchIcon}>
              <Icon name="search1" size={24} color={'#000'} />
            </View>
          </TouchableOpacity>
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
    textDecorationLine: 'underline',
    marginBottom: 20,
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
  searchIcon: {
    backgroundColor: '#fff',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: '50%',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    position: 'absolute',
    bottom: 50,
    right: 0,
  },
});
