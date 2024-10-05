/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, BackHandler, ScrollView } from 'react-native'
import { Colors } from '../Constants/Colors'
import { onboardingData } from '../Data/onboardingData'
import { ProgressBar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Toast from 'react-native-toast-message'
import CustomTextLabel from '../Helpers/CustomTextLabel'
import CustomText from '../Helpers/CustomText'

const OnboardUser = ({ navigation }: any) => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0) // To track the current question index
  const [selectedAnswers, setSelectedAnswers] = useState<any>([])
  const steps = onboardingData.steps
  const currentStep: any = steps[currentStepIndex]

  const backAction = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1)
      return true // Prevent default back action
    } else {
      return false // Allow default back action if on the first question
    }
  }

  // Handle hardware back button press
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove() // Cleanup on component unmount
  }, [currentStepIndex])

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      setSelectedAnswers([]) // Reset selections for the next question
    } else {
      navigation.navigate('CelebrationPage') // Navigate to the sign-up screen when done
    }
  }

  const handleSelection = (answer: string) => {
    if (selectedAnswers.includes(answer)) {
      setSelectedAnswers(selectedAnswers.filter((item: string) => item !== answer))
    } else {
      if (!currentStep.selectionLimit || selectedAnswers.length < currentStep.selectionLimit) {
        setSelectedAnswers([...selectedAnswers, answer])
      }else{
        Toast.show({
          type: 'info', // or 'success' / 'error'
          text1: 'Max limit reached',
          text2: 'You have selected the maximum number of answers allowed.',
          position: 'bottom',
        })
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
      {/* Back button in the top left */}
      {currentStepIndex > 0 && (
        <TouchableOpacity style={styles.backButton} onPress={backAction}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      )}

      <Text style={styles.progressText}>{currentStep.progressText}</Text>

      <ProgressBar
        progress={(currentStepIndex + 1) / steps.length}
        color="#0056FF"
        style={styles.progressBar}
      />

      <CustomTextLabel style={styles.question}>{currentStep.question}</CustomTextLabel>

      {currentStep.instruction && <Text style={styles.instruction}>{currentStep.instruction || ' '}</Text>}
      <View style={styles.optionsContainer}>
        {currentStep.options.map((item: any, index: any) => (
          <TouchableOpacity
            key={item.value || item.title || index.toString()} // Ensure unique keys
            style={[
              item.icon ? styles.optionButtonIcon : styles.optionButton,
              selectedAnswers.includes(item.value || item.title) && styles.selectedAnswerButton,
            ]}
            onPress={() => handleSelection(item.value || item.title)}
          >
            {item.icon && (
              <Icon name={item.icon} size={50} color="#FFFFFF" style={styles.icon} />
            )}
            <CustomText style={styles.optionTitle}>{item.title || item.label}</CustomText>
            {item.description && <Text style={styles.optionDescription}>{item.description}</Text>}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <CustomText style={styles.nextButtonText}>Next</CustomText>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}
const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // This ensures the ScrollView takes the entire space
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  progressText: {
    color: '#AAAAAA',
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'Montserrat-Medium'
  },
  question: {
    color: '#f0f871',
    fontSize: 46,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instruction: {
    color: '#AAAAAA',
    marginBottom: 30,
  },
  answerButton: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 5,
    width: (width - 60) / 2, // Half the width of the screen minus padding for two columns
    alignItems: 'center',
    flexGrow: 1, // Allow stretch if only one item is in the row
  },
  selectedAnswerButton: {
    backgroundColor: '#0056FF',
  },
  answerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20
  },
  optionButton: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 15,
    paddingTop: 12,
    paddingHorizontal:10,
    display:'flex',
    margin: 5,
    alignItems: 'center',
  },
  optionButtonIcon: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 35,
    paddingVertical: 30,
    paddingHorizontal: 6,
    margin: 5,
    width: (width - 17) / 3.5, // Adjust to fit exactly three items per row
    alignItems: 'center'
  },
  icon: {
    marginBottom: 20,
  },
  optionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    // fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  optionDescription: {
    color: '#AAAAAA',
    fontSize: 10,
    textAlign: 'center',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#555',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#0056FF',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center', // Center the button and make it wrap content
    marginVertical: 10,  // Optional: to add some vertical spacing
  },
  nextButtonText: {
    color: Colors.primaryTextColor,
    fontSize: 18,
    // fontWeight: 'bold',
  },
})

export default OnboardUser
