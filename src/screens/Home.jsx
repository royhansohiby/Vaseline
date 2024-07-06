// screens/Home.js
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  const [themeImageUrl, setThemeImageUrl] = useState('');
  const [colorImageUrl, setColorImageUrl] = useState('');

  return (
    <ScrollView style={styles.container}>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* URL Input for Theme Image */}
      <View style={styles.urlInputContainer}>
        <TextInput
          style={styles.urlInput}
          placeholder="Enter Theme Image URL"
          value={themeImageUrl}
          onChangeText={setThemeImageUrl}
        />
      </View>

      {/* Editor's Choice */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Produk</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ThemePreview imageUrl={themeImageUrl} />
        <ThemePreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
        <ThemePreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
        <ThemePreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
      </ScrollView>

      {/* URL Input for Color Image */}
      <View style={styles.urlInputContainer}>
        <TextInput
          style={styles.urlInput}
          placeholder="Enter Color Image URL"
          value={colorImageUrl}
          onChangeText={setColorImageUrl}
        />
      </View>

      {/* Colors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Produk</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ColorPreview imageUrl={colorImageUrl} />
        <ColorPreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
        <ColorPreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
        <ColorPreview imageUrl="https://cf.shopee.co.id/file/01b0b70c0a503d8cbc6ab952a574ce5b" />
      </ScrollView>
    </ScrollView>
  );
};

const ThemePreview = ({ imageUrl }) => (
  <View style={styles.themePreview}>
    <Image
      source={{ uri: imageUrl }}
      style={styles.themeImage}
      resizeMode="cover"
      onError={() => console.log('Error loading image')}
    />
  </View>
);

const ColorPreview = ({ imageUrl }) => (
  <View style={styles.colorPreview}>
    <Image
      source={{ uri: imageUrl }}
      style={styles.colorImage}
      resizeMode="cover"
      onError={() => console.log('Error loading image')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  searchBar: {
    padding: 5,
    backgroundColor: '#231',
    margin: 5,
    borderRadius: 8,
  },
  searchInput: {
    color: '#888',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  category: {
    alignItems: 'center',
  },
  categoryIcon: {
    width: 40,
    height: 40,
  },
  categoryText: {
    fontSize: 16,
  },
  promotions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  promotion: {
    alignItems: 'center',
  },
  promotionIcon: {
    width: 50,
    height: 50,
  },
  promotionText: {
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  sectionHeaderLink: {
    fontSize: 16,
    color: '#1e90ff',
  },
  themePreview: {
    width: 120,
    height: 200,
    backgroundColor: '#ccc',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeImage: {
    width: '100%',
    height: '100%',
  },
  colorPreview: {
    width: 120,
    height: 200,
    backgroundColor: '#ccc',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorImage: {
    width: '100%',
    height: '100%',
  },
  urlInputContainer: {
    padding: 16,
  },
  urlInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
  },
});

export default Home;