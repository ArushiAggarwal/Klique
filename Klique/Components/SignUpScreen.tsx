import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../Constants/Colors';

const SignUpScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#AAAAAA"
      />
      <TextInput
        style={styles.input}
        placeholder="Email id"
        placeholderTextColor="#AAAAAA"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        secureTextEntry
      />

      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OnBoardUsers')}>
        <Text style={styles.buttonText}>Let's Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  title: {
    color: Colors.primaryTextColor, // Light yellow color
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    height: 50,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#AAAAAA', // Light gray color
    textAlign: 'right',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0056FF', // Blue button
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primaryTextColor, // Light yellow text
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;