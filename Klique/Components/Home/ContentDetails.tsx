import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../Helpers/CustomText';
import { Colors } from '../../Constants/Colors';
import { TextInput } from 'react-native-paper';

const ContentDetails = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <CustomText style={styles.title}>Content Title</CustomText>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="search" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profileDetailsHolder}>
          <Text style={styles.profileName}>Platform :</Text>
          <Text style={styles.profileName}>Schedule : </Text>
          <Text style={styles.profileName}>Description :</Text>
        </View>
      </View>

      {/* Tab */}
      <View style={styles.TabContainer}>
          <View style={styles.CenterBorder}><Text></Text></View>
          <View style={styles.TabContainerInner}>
            <Text style={styles.TabName}>Tasks</Text>
            <Text style={[styles.TabName, styles.activeTabName]}>Assets</Text>
          </View>
      </View>

      {/* Accordion Buttons */}
      <TouchableOpacity style={styles.accordionButton}>
        <Text style={styles.accordionText}>Script</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.accordionButton}>
        <Text style={styles.accordionText}>Graphics</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Add New Content Section */}
      <View style={styles.addContent}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="add" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TextInput
            style={styles.addContentInput}
            placeholder="Add new"
            placeholderTextColor="#AAA"
          />
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  headerRight: {
    flexDirection: 'row',
  },
  iconButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 22,
    color: '#FFFF66',
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 0
  },
  profileImageHolder:{

  },
  profileDetailsHolder:{
    flex:1,
    paddingLeft: 20
  },
  profileName: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10
  },
  profileEmail: {
    fontSize: 16,
    color: '#888888',
    marginVertical: 5,
  },
  profilePhone: {
    fontSize: 16,
    color: '#888888',
  },
  accordionButton: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  accordionText: {
    fontSize: 14,
    color: '#f5f5f5',
    fontFamily: 'Montserrat-Medium'
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
  TabContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // gap:50
    marginVertical: 20,
    position: 'relative'
  },
  TabContainerInner:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1A1A'
  },
  CenterBorder:{
    borderColor: '#3A3A3A',
    borderWidth: 1,
    height:1,
    position: 'absolute',
    left: 0,
    right: 0
  },
  TabName:{
    color: '#A1A1A1',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontSize: 13,
    paddingBottom: 4,
    fontFamily: 'Montserrat-Medium',
  },
  activeTabName:{
    backgroundColor: '#EB7A52',
    color: '#ffffff',
  },
  addContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    borderColor:'#f5f5f5',
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 10,
    paddingLeft: 5,
    marginHorizontal: 20,
  },
  addContentInput: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 0,
    fontSize: 14,
    backgroundColor: 'transparent'
  },
});

export default ContentDetails;
