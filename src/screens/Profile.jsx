// screens/Profile.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: 'https://example.com/profile_picture.jpg' }} style={styles.profileImage} />
        <Text style={styles.profileName}>Royhan Sohiby M</Text>
        <View style={styles.profileStats}>
          <Text style={styles.profileStat}>Favorit 0</Text>
          <Text style={styles.profileStat}>Ikuti 0</Text>
        </View>
      </View>

      <View style={styles.profileMenu}>
        <ProfileMenuItem name="Tema" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Wallpaper" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Nada dering" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Huruf" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Gaya kunci" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Ikon" iconUrl="URL_IMAGE" />
        <ProfileMenuItem name="Kustomisasi tema" iconUrl="URL_IMAGE" />
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>Anda mungkin suka ini</Text>
      </View>
      <ScrollView horizontal>
        <ThemePreview imageUrl="URL_IMAGE" />
        <ThemePreview imageUrl="URL_IMAGE" />
      </ScrollView>
    </ScrollView>
  );
};

const ProfileMenuItem = ({ name, iconUrl }) => (
  <View style={styles.profileMenuItem}>
    <Image source={{ uri: iconUrl }} style={styles.profileMenuIcon} />
    <Text style={styles.profileMenuText}>{name}</Text>
  </View>
);

const ThemePreview = ({ imageUrl, title, price }) => (
  <View style={styles.themePreview}>
    <Image source={{ uri: imageUrl }} style={styles.themeImage} />
    {title && price && (
      <View style={styles.themeInfo}>
        <Text style={styles.themeTitle}>{title}</Text>
        <Text style={styles.themePrice}>{price}</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
  },
  profileHeader: {
    padding: 16,
    backgroundColor: '#231',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#fff',
  },
  profileStats: {
    flexDirection: 'row',
    marginTop: 8,
  },
  profileStat: {
    fontSize: 16,
    color: '#888',
    marginHorizontal: 8,
  },
  profileMenu: {
    padding: 16,
  },
  profileMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  profileMenuIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  profileMenuText: {
    fontSize: 16,
  },
  sectionHeader: {
    padding: 16,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
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
  themeInfo: {
    alignItems: 'center',
    marginTop: 8,
  },
  themeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  themePrice: {
    fontSize: 14,
    color: '#888',
  },
});

export default Profile;
