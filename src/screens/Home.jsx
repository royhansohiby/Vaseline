import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Tema</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      {/* Editor's Choice */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Pilihan editor</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ThemePreview imageUrl="https://example.com/theme1.png" />
        <ThemePreview imageUrl="https://example.com/theme2.png" />
        <ThemePreview imageUrl="https://example.com/theme3.png" />
        <ThemePreview imageUrl="https://example.com/theme4.png" />
      </ScrollView>

      {/* Colors */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Warna/i</Text>
        <Text style={styles.sectionHeaderLink}>Lainnya</Text>
      </View>
      <ScrollView horizontal>
        <ColorPreview imageUrl="https://example.com/color1.png" />
        <ColorPreview imageUrl="https://example.com/color2.png" />
        <ColorPreview imageUrl="https://example.com/color3.png" />
        <ColorPreview imageUrl="https://example.com/color4.png" />
      </ScrollView>
    </ScrollView>
  );
};

const Category = ({ name }) => (
  <View style={styles.category}>
    <Text style={styles.categoryText}>{name}</Text>
  </View>
);

const Promotion = ({ name, imageUrl }) => (
  <View style={styles.promotion}>
    <Image source={{ uri: imageUrl }} style={styles.promotionImage} />
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
  header: {
    padding: 16,
    backgroundColor: '#555',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  headerSubText: {
    fontSize: 16,
    color: '#888',
  },
  searchBar: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 8,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  category: {
    alignItems: 'center',
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
  promotionImage: {
    width: 50,
    height: 50,
  },
  promotionText: {
    fontSize: 16,
    marginTop: 8,
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
  },
  colorImage: {
    width: '100%',
    height: '100%',
  },
});

export default App;
