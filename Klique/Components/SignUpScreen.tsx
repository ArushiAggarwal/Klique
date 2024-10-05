import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../Constants/Colors';
import CustomText from '../Helpers/CustomText';
import CustomTextLabel from '../Helpers/CustomTextLabel';

const SignUpScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <CustomTextLabel style={styles.title}>Sign Up</CustomTextLabel>

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
        <CustomText style={styles.buttonText}>Let's Create</CustomText>
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

export default SignUpScreen;