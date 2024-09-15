import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from './HomeScreen'

const Tab = createBottomTabNavigator()

// Define the screenOptions function separately
const screenOptions = ({ route }:any) => ({
  tabBarIcon: ({ color, size }:any) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Learn':
        iconName = 'lightbulb-outline';
        break;
      case 'Ideate':
        iconName = 'add-box';
        break;
      case 'Plan':
        iconName = 'book';
        break;
      case 'Track':
        iconName = 'calendar-today';
        break;
      default:
        iconName = 'home';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  headerShown: false,
  tabBarShowLabel: true, // Show the tab labels
  tabBarActiveTintColor: '#FF6B45', // Active icon color
  tabBarInactiveTintColor: '#888', // Inactive icon color
  tabBarStyle: {
    backgroundColor: '#1A1A1A', // Tab bar background color
    borderTopWidth: 0, // Remove top border
  },
});

export default function BasePage() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Learn" component={HomeScreen} />
      <Tab.Screen name="Ideate" component={HomeScreen} />
      <Tab.Screen name="Plan" component={HomeScreen} />
      <Tab.Screen name="Track" component={HomeScreen} />
    </Tab.Navigator>
  )
}
