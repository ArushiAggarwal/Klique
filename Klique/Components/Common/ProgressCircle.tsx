import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CircularProgress } from 'react-native-circular-progress';

const ProgressCircle = ({ total = 5, completed = 2, size = 60 }) => {
  const progress = (completed / total) * 100; // Calculate the percentage

  return (
    <View style={styles.container}>
      <CircularProgress
        size={size} // Size of the circle
        width={8} // Width of the progress stroke
        fill={progress} // Percentage of progress (0 - 100)
        tintColor="#FF6B45" // Progress color (orange as in the image)
        rotation={0} // To start from top
        backgroundColor="#444444"
        lineCap="round" // Makes the ends rounded
      >
        {() => (
            <View style={styles.textContainer}>
               <Text>
                <Text style={styles.completedText}>{completed}</Text>
                <Text style={styles.totalText}>/{total}</Text>
              </Text>
            </View>
        )}
      </CircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    width: '100%'
  },
  textContainer: {
    width:500,
    position: 'absolute', // Overlay text on the center of the circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B45',
  },
  totalText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default ProgressCircle;
