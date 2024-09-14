import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, BackHandler, Dimensions } from 'react-native';
import onboardingData from './onboardingData.json'; // Ensure this is the correct path to your JSON data
import { ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const OnboardingUsers = ({ navigation }: any) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0); // To track the current question index
    const [selectedAnswers, setSelectedAnswers] = useState<any>([]);

    const steps = onboardingData.steps;
    const currentStep: any = steps[currentStepIndex];

    const backAction = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
            return true; // Prevent default back action
        } else {
            return false; // Allow default back action if on the first question
        }
    };

    // Handle hardware back button press
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove(); // Cleanup on component unmount
    }, [currentStepIndex]);
    
    


    const handleNext = () => {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
            setSelectedAnswers([]); // Reset selections for the next question
        } else {
              navigation.navigate('CelebrationPage'); // Navigate to the sign-up screen when done
        }
    };

    const handleSelection = (answer: any) => {
        if (selectedAnswers.includes(answer)) {
            setSelectedAnswers(selectedAnswers.filter((item: any) => item !== answer));
        } else {
            if (!currentStep.selectionLimit || selectedAnswers.length < currentStep.selectionLimit) {
                setSelectedAnswers([...selectedAnswers, answer]);
            }
        }
    };

    return (
        <View style={styles.container}>

            {/* Back button in the top left */}
            {currentStepIndex > 0 && (
                <TouchableOpacity style={styles.backButton} onPress={backAction}>
                    <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            )}

            <Text style={styles.progressText}>{currentStep.progressText}</Text>

            <ProgressBar
                progress={(currentStepIndex + 1) / steps.length}
                color="#0056FF"
                style={styles.progressBar}
            />

            <Text style={styles.question}>{currentStep.question}</Text>
            
            <Text style={styles.instruction}>{currentStep.instruction || ' '}</Text>
            {/* Icon List */}
            {currentStep.options && Object.keys(currentStep.options[0]).includes('icon') && (
                <FlatList
                    data={currentStep.options}
                    keyExtractor={(item, index) => item.value || item.title || index.toString()} // Ensure unique keys
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.optionButtonIcon,
                                selectedAnswers.includes(item.value || item.title) && styles.selectedAnswerButton,
                            ]}
                            onPress={() => handleSelection(item.value || item.title)}
                        >
                            {/* Display the icon if available */}
                            {item.icon && (
                                <Ionicons name={item.icon} size={50} color="#FFFFFF" style={styles.icon} />
                                // <Image
                                //     source={{ uri: item.icon }} // Replace with the actual icon path or local import
                                //     style={styles.icon}
                                //     resizeMode="contain"
                                // />
                            )}
                            <Text style={styles.optionTitle}>{item.title || item.label}</Text>
                            {item.description && <Text style={styles.optionDescription}>{item.description}</Text>}
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.optionsContainer}
                    numColumns={3}
                />
            )}

            {/* Normal List */}
            {currentStep.options && !Object.keys(currentStep.options[0]).includes('icon') && (
                <FlatList
                    data={currentStep.options}
                    keyExtractor={(item, index) => item.value || item.title || index.toString()} // Ensure unique keys
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.optionButton,
                                selectedAnswers.includes(item.value || item.title) && styles.selectedAnswerButton,
                            ]}
                            onPress={() => handleSelection(item.value || item.title)}
                        >
                            {/* Display the icon if available */}
                            {item.icon && (
                                <Image
                                    source={{ uri: item.icon }} // Replace with the actual icon path or local import
                                    style={styles.icon}
                                    resizeMode="contain"
                                />
                            )}
                            <Text style={styles.optionTitle}>{item.title || item.label}</Text>
                            {item.description && <Text style={styles.optionDescription}>{item.description}</Text>}
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.optionsContainer}
                    numColumns={2}
                />
            )}
            
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
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
        marginTop:40,
        marginBottom: 10,
    },
    question: {
        color: '#f0f871',
        fontSize: 50,
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
        alignItems: 'center',
        marginBottom: 20,
    },
    optionButton: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 6,
        margin: 5,
        width: (width - 60) / 2, // Half the width of the screen minus padding for two columns
        flexGrow: 1, // Allow stretch if only one item is in the row
        alignItems: 'center',
    },
    optionButtonIcon:{
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 35,
        paddingVertical: 15,
        paddingHorizontal: 5,
        margin: 5,
        width: (width - 60) / 3, // Half the width of the screen minus padding for two columns
        flexGrow: 1, // Allow stretch if only one item is in the row
        alignItems: 'center',
    },
    icon: {
        marginBottom: 20,
    },
    optionTitle: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    optionDescription: {
        color: '#AAAAAA',
        fontSize: 12,
        textAlign: 'center',
    },
    progressBar: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#555',
        marginBottom: 20,
    },
    nextButton: {
        top:0,
        backgroundColor: '#0056FF',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 10
    },
    nextButtonText: {
        color: Colors.primaryTextColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OnboardingUsers;
