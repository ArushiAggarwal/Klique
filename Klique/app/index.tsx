import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text, StyleSheet } from 'react-native'
import SignUpScreen from './screens/SignUpScreen'
import OnBoardUsers from './screens/OnBoardUsers'
import CelebrationPage from './screens/CelebrationPage'

const Stack = createNativeStackNavigator()

// Splash Screen Component
const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    // Navigate to HomeScreen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('Home') // Use replace to avoid going back to the splash screen
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
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={SignUpScreen} />
      <Stack.Screen name="OnBoardUsers" component={OnBoardUsers} />
      <Stack.Screen name="CelebrationPage" component={CelebrationPage} />
    </Stack.Navigator>
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
    color: '#D5FF00', // Light yellow text
    fontSize: 60,
    fontWeight: 'bold',
  },
})