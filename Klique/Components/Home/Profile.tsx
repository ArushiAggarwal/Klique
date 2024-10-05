import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../Helpers/CustomText';
import { Colors } from '../../Constants/Colors';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <CustomText style={styles.title}>Profile</CustomText>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileImageHolder}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/90.jpg' }} // Placeholder image URL
            style={styles.profileImage}
          />
        </View>
        <View style={styles.profileDetailsHolder}>
          <Text style={styles.profileName}>Akshita</Text>
          <Text style={styles.profileEmail}>akshita13@gmail.com</Text>
          <Text style={styles.profilePhone}>99******81</Text>
        </View>
      </View>

      {/* Accordion Buttons */}
      <TouchableOpacity style={styles.accordionButton}>
        <Text style={styles.accordionText}>Private Details</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.accordionButton}>
        <Text style={styles.accordionText}>Settings</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.accordionButton}>
        <Text style={styles.accordionText}>Terms & Conditions</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.button}>
        <CustomText style={styles.buttonText}>Become a Talent!</CustomText>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 22,
    color: '#FFFF66',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20
  },
  profileImageHolder:{

  },
  profileDetailsHolder:{
    flex:1,
    paddingLeft: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: '#888888',
    marginVertical: 5,
  },
  profilePhone: {
    fontSize: 16,
    color: '#888888',
  },
  accordionButton: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  accordionText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#0056FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center', // Center the button and make it wrap content
    marginVertical: 10,  // Optional: to add some vertical spacing
  },
  buttonText: {
    color: Colors.primaryTextColor, // Light yellow text
    fontSize: 16,
  },
});

export default Profile;
