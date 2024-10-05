import Icon from 'react-native-vector-icons/MaterialIcons'
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomText from '../Helpers/CustomText';

const CelebrationPage = ({ navigation }:any) => {

    useEffect(() => {
    const timer = setTimeout(() => {
        navigation.replace('BasePage')
    }, 3000)

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
    }, [navigation])

    return (
        <View style={styles.container}>
            {/* Celebration Icon */}
            <Icon name="celebration" style={styles.icon} size={90} color="#FF6B45" />

            {/* Main Heading */}
            <CustomText style={styles.mainHeading}>Wohoo!</CustomText>

            {/* Sub Heading */}
            <CustomText style={styles.subHeading}>Hey Akshita!</CustomText>

            {/* Message */}
            <Text style={styles.message}>
                We are really excited to be part of your content journey!
            </Text>

            {/* Call to Action */}
            <Text style={styles.callToAction} onPress={() => navigation.navigate('BasePage')}>Let’s get you creating ASAP!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    icon: {
        width: 100, // Adjust size as needed
        height: 100,
        marginBottom: 20,
        tintColor: '#FF6B45', // Adjust color to match design
    },
    mainHeading: {
        fontSize: 40,
        color: '#f0f871', // Yellow color for the main heading
        marginBottom: 60,
    },
    subHeading: {
        fontSize: 36,
        color: '#FFFFFF', // White color for the subheading
        marginBottom: 30,
    },
    message: {
        fontSize: 20,
        color: '#FFFFFF', // White color for the message
        textAlign: 'center',
        marginBottom: 30,
        fontFamily: 'Montserrat-Medium'
    },
    callToAction: {
        fontSize: 20,
        color: '#FF6B45', // Orange color for the call to action
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Montserrat-Medium'
    },
});

export default CelebrationPage;
