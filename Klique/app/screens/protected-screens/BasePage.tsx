import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

export default function BasePage() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName:any;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Learn') {
            iconName = 'lightbulb-outline';
          } else if (route.name === 'Ideate') {
            iconName = 'add-box';
          } else if (route.name === 'Plan') {
            iconName = 'book';
          } else if (route.name === 'Track') {
            iconName = 'calendar-today';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarShowLabel: true, // Hide the tab labels
        tabBarActiveTintColor: '#FF6B45', // Active icon color
        tabBarInactiveTintColor: '#888', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#1A1A1A', // Tab bar background color
          borderTopWidth: 0, // Remove top border
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Learn" component={HomeScreen} />
      <Tab.Screen name="Ideate" component={HomeScreen} />
      <Tab.Screen name="Plan" component={HomeScreen} />
      <Tab.Screen name="Track" component={HomeScreen} />
    </Tab.Navigator>
  );
}
