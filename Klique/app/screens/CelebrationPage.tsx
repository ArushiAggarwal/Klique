import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CelebrationPage = () => {
  return (
    <View style={styles.container}>
      {/* Celebration Icon */}
      <Image
        source={{ uri: 'https://example.com/celebration-icon.png' }} // Replace with your actual icon URL or local asset
        style={styles.icon}
        resizeMode="contain"
      />
      
      {/* Main Heading */}
      <Text style={styles.mainHeading}>Wohoo!</Text>
      
      {/* Sub Heading */}
      <Text style={styles.subHeading}>Hey Akshita!</Text>
      
      {/* Message */}
      <Text style={styles.message}>
        We are really excited to be part of your content journey!
      </Text>
      
      {/* Call to Action */}
      <Text style={styles.callToAction}>Let’s get you creating ASAP!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 100, // Adjust size as needed
    height: 100,
    marginBottom: 20,
    tintColor: '#FF6B45', // Adjust color to match design
  },
  mainHeading: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#D5FF00', // Yellow color for the main heading
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF', // White color for the subheading
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#FFFFFF', // White color for the message
    textAlign: 'center',
    marginBottom: 10,
  },
  callToAction: {
    fontSize: 20,
    color: '#FF6B45', // Orange color for the call to action
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CelebrationPage;
