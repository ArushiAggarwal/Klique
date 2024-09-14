import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { View, Text, StyleSheet } from 'react-native'
// import CelebrationPage from './screens/CelebrationPage'
// import BasePage from './screens/protected-screens/BasePage'
import { Colors } from './Constants/Colors'
import SignUpScreen from './Components/SignUpScreen'
import OnboardUser from './Components/OnboardUser'

const Stack = createNativeStackNavigator()

// Splash Screen Component
const SplashScreen = ({ navigation }:any) => {
  useEffect(() => {
    // Navigate to HomeScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home')
      // navigation.replace('BasePage')
    }, 3000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.brandText}>Klique</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={SignUpScreen} />
        <Stack.Screen name="OnBoardUsers" component={OnboardUser} />
        {/* <Stack.Screen name="CelebrationPage" component={CelebrationPage} />
        <Stack.Screen name="BasePage" component={BasePage} /> */}
      </Stack.Navigator>
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
    color: '#FFFFFF', // White text
    fontSize: 30,
    fontWeight: 'bold',
  },
  brandText: {
    color: Colors.primaryTextColor, // Light yellow text
    fontSize: 60,
    fontWeight: 'bold',
  },
})
