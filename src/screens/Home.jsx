// screens/Home.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* Editor's Choice */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Produk</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ThemePreview imageUrl="URL_IMAGE" />
        <ThemePreview imageUrl="URL_IMAGE" />
        <ThemePreview imageUrl="URL_IMAGE" />
        <ThemePreview imageUrl="URL_IMAGE" />
      </ScrollView>

      {/* Colors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Produk</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ColorPreview imageUrl="URL_IMAGE" />
        <ColorPreview imageUrl="URL_IMAGE" />
        <ColorPreview imageUrl="URL_IMAGE" />
        <ColorPreview imageUrl="URL_IMAGE" />
      </ScrollView>
    </ScrollView>
  );
};

const Category = ({ name, iconUrl }) => (
  <View style={styles.category}>
    <Image source={{ uri: iconUrl }} style={styles.categoryIcon} />
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const Promotion = ({ name, iconUrl }) => (
  <View style={styles.promotion}>
    <Image source={{ uri: iconUrl }} style={styles.promotionIcon} />
    <Text style={styles.promotionText}>{name}</Text>
  </View>
);

const ThemePreview = ({ imageUrl }) => (
  <View style={styles.themePreview}>
    <Image source={{ uri: imageUrl }} style={styles.themeImage} />
  </View>
);

const ColorPreview = ({ imageUrl }) => (
  <View style={styles.colorPreview}>
    <Image source={{ uri: imageUrl }} style={styles.colorImage} />
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
});

export default Home;
