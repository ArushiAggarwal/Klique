import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from '../../Helpers/CustomText';
import Popover from 'react-native-popover-view';

const Ideate = () => {

  const [isVisible, setIsVisible] = useState(false);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  const getPopOver = () => {
    return (
      <Popover
        isVisible={isVisible}
        popoverStyle={styles.popoverStyle}
        onRequestClose={togglePopover}
        arrowSize={{
          width:0,
          height:0
        }}
        from={(
          <TouchableOpacity onPress={togglePopover} >
            <Icon name="menu" size={30} color="#FFFFFF" style={[styles.footerIcon, styles.footerIcon_ham]} />
          </TouchableOpacity>
        )}
      >
        <View style={styles.popoverContainer}>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>Transition Reel Ideas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>Analyse my reel performance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>How to add caption in reels</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popoverOption,styles.popoverOptionLast]} onPress={() => { }}>
            <Text style={styles.popoverText}>What’s latest news in fashion?</Text>
          </TouchableOpacity>
        </View>
      </Popover >
    );
  };

  return (
    <Fragment>
      <View style={styles.innerContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <CustomText style={styles.title}>Ideate</CustomText>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Icon name="search" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <FontAwesome name={'book'} size={30} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Suggest ideas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Find me similar content</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Analyse my Instagram profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Spot trend</Text>
          </TouchableOpacity>
        </View>

        {/* Footer Input Section */}
        <View style={styles.footer} >
          {getPopOver()}
          <View style={styles.round_up}>
            <TextInput
              style={styles.footerInput}
              placeholder="What are you creating today?"
              placeholderTextColor="#AAA"
            />
            <Icon name="mic" size={30} color="#FFFFFF" style={styles.footerIcon} />
            <Icon name="image" size={30} color="#FFFFFF" style={styles.footerIcon} />
          </View>
        </View>
      </View>
    </Fragment>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#3A3A3A',
    borderBottomWidth: 1,
  },
  headerButton: {
    paddingHorizontal: 10,
  },
  headerRight: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    color: '#FFFF66', // Light yellow color for the title
    // fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    borderColor: '#F5F5F5', // White border color for button
    borderWidth: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  round_up: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderColor: '#F5F5F5',
    borderRadius: 25,
    borderWidth: 1,
    flex: 1,
  },
  footerInput: {
    flex: 1,
    color: '#F5F5F5',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  footerIcon: {
    paddingHorizontal: 5,
    color: '#F5F5F5',
  },
  footerIcon_ham: {
    marginTop: 10,
  },
  popoverStyle: {
    backgroundColor: 'transparent', // This removes the white background
  },
  popoverContainer: {
    backgroundColor: '#666666', // Match the gray background color
    borderRadius: 10, // Rounded corners
    paddingVertical: 5, // Padding to create space between options and edges
    paddingHorizontal: 10,
    width: 220, // Set width to keep uniformity
  },
  popoverOption: {
    paddingVertical: 10, // Equal spacing between each option
    borderBottomColor: '#888888', // Light gray border between items
    borderBottomWidth: 1,
  },
  popoverOptionLast:{
    borderBottomWidth: 0,
    paddingVertical: 10
  },
  popoverText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Ideate;
