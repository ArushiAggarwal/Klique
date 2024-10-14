import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { Colors } from './Constants/Colors'
import SignUpScreen from './Components/SignUpScreen'
import OnboardUser from './Components/OnboardUser'
import Toast from 'react-native-toast-message'
import CelebrationPage from './Components/CelebrationPage'
import BasePage from './Components/Home/BasePage'
import CustomText from './Helpers/CustomText'
import LoginScreen from './Components/LoginScreen'
import OtpValidate from './Components/OtpValidate'

const Stack = createNativeStackNavigator()

// Splash Screen Component
const SplashScreen = ({ navigation }:any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignUpScreen')
      // navigation.replace('BasePage')
    }, 3000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <CustomText style={styles.welcomeText}>Welcome to</CustomText>
      <CustomText style={styles.brandText}>Klque</CustomText>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OtpValidate" component={OtpValidate} />
        <Stack.Screen name="OnBoardUsers" component={OnboardUser} />
        <Stack.Screen name="CelebrationPage" component={CelebrationPage} />
        <Stack.Screen name="BasePage" component={BasePage} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A', // Dark background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontFamily: 'DelaGothicOne-Regular',
    color: '#FFFFFF', // White text
    fontSize: 30,
  },
  brandText: {
    fontFamily: 'DelaGothicOne-Regular',
    color: Colors.primaryTextColor, // Light yellow text
    fontSize: 60,
  },
})
