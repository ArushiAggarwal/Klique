import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from '../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from '../../Helpers/CustomText';
import ProgressCircle from '../Common/ProgressCircle';

const HomeScreen = ({ navigation }:any) => {

  const navigateToProfile = () => {
    navigation.navigate('Profile')
  }

  const navigateToIdeasDump = () => {
    navigation.navigate('IdeasDump')
  }

  return (
    <ScrollView  style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello,</Text>
            <CustomText style={styles.name}>Akshita!</CustomText>
          </View>
          <View style={styles.icons}>
            {/* <Icon name="chat-bubble-outline" size={36} color="#FFFFFF" /> */}
            <Icon name="search" size={36} color="#FFFFFF" style={styles.iconSpacing} />
            <TouchableOpacity onPress={navigateToProfile}>
              <Icon name="account-circle" size={36} color="#FFFFFF" style={styles.iconSpacing} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Ideate')}>
            <Text style={styles.searchInput}>What are you creating today?</Text>
          </TouchableOpacity>
        </View>

        {/* Content Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Content Goals <Icon name="edit" size={16} color="#b6b6b6" /></Text>
          <View style={styles.contentGoals}>
            <Text style={styles.contentText}>
              I want to create <Text style={styles.highlightText}>entertaining</Text> content which is <Text style={styles.highlightText}>creative</Text> aiming at <Text style={styles.highlightText}>growing</Text> my following with <Text style={styles.highlightText}>short form videos</Text> & unique <Text style={styles.highlightText}>visuals</Text> in <Text style={styles.highlightText}>fashion & beauty</Text> niche on <Text style={styles.highlightText}>Instagram.</Text>
            </Text>
          </View>
        </View>

        {/* Socials */}
        <View style={styles.section}>
          <View style={styles.socialIcons}>
            <Text style={styles.sectionTitleSocial}>Socials:</Text>
            <FontAwesome name={'instagram'} size={20} style={styles.socialIcon} />
            <FontAwesome name={'twitter'} size={20} style={styles.socialIcon} />
          </View>
        </View>

        {/* Ideas Dump */}
        <View style={styles.sectionRow}>
          <View style={styles.sectionHalf}>
            <Text style={styles.sectionTitle}>Ideas dump!</Text>
            <TouchableOpacity onPress={navigateToIdeasDump} >
            <View style={styles.ideaDump}>
              <Text style={styles.ideaText}>Office Outfit Reel. Butterfly eye makeup look. 
                Friends meet up vlog.
                Delhi Food trip highlight.
                Nykaa Brand Reel</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={styles.sectionHalf}>
            <Text style={styles.sectionTitle}>Posting Schedule</Text>
            <View style={styles.schedule}>
              <View>
                <Text style={styles.scheduleText}>Today</Text>
                <View style={styles.timeTextContainer}>
                  <Text style={styles.timeText}>9:00</Text>
                  <Text style={styles.timeIndicationText}>pm</Text>
                </View>
              </View>
              <View>
                <FontAwesome name={'instagram'} size={24} style={styles.socialIcon} />
              </View>
            </View>
            <Text style={styles.sectionTitleTrack}>Stay on track</Text>
            <Text style={styles.contentPosted}>Content Posted</Text>
            <View style={styles.progressContainer}>
              <ProgressCircle total={5} completed={2} size={70} />
            </View>
            <Text style={styles.sectionTitleTip}>Tip of the day!</Text>
            <View style={styles.tipContainer}>
              <Text style={styles.tipText}>Prioritise authentic visuals over highly edited videos.</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  innerContainer: {
    paddingHorizontal: 20, // Add padding to inner container
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:20
  },
  greeting: {
    fontSize: 20,
    color: Colors.primaryTextColor,
    fontFamily: 'Montserrat-Medium'
  },
  name: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  icons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 10,
  },
  searchContainer: {
    paddingTop:20,
    paddingBottom:30
  },
  searchInput: {
    borderRadius: 20,
    paddingLeft: 28,
    color: '#F5F5F5',
    borderColor: '#F5F5F5',
    borderWidth: 1,
    fontSize: 13,
    paddingVertical:16
  },
  section: {
    marginTop: 8,
    marginBottom: 20
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 326,
    gap: 20
  },
  sectionHalf: {
    flex: 1,
    // marginHorizontal: 5,
    gap:0
  },
  sectionTitleSocial: {
    fontSize: 16,
    color: Colors.primaryTextColor,
    paddingRight: 15,
    fontFamily: 'Montserrat-Medium'
  },
  sectionTitle: {
    fontSize: 15,
    color: Colors.primaryTextColor,
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold'
  },
  sectionTitleTip: {
    fontSize: 16,
    color: Colors.primaryTextColor,
    marginBottom: 10,
    marginTop: 5,
    fontFamily: 'Montserrat-SemiBold'
  },
  sectionTitleTrack: {
    fontSize: 16,
    color: Colors.primaryTextColor,
    marginBottom: 0,
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold'
  },
  contentGoals: {
    backgroundColor: '#444444',
    borderRadius: 10,
    padding: 12,
    fontFamily: 'Montserrat-Regular',
    minHeight:120
  },
  contentText: {
    fontSize: 13,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium'
  },
  highlightText: {
    fontFamily: 'Montserrat-Bold'
  },
  socialIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    marginRight: 10,
    backgroundColor: '#423f3f',
    padding: 10,
    borderRadius: 40,
    color: '#fff'
  },
  ideaDump: {
    backgroundColor: '#444444',
    borderRadius: 10,
    padding: 15,
    height: '100%'
  },
  ideaText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginBottom: 5,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 16
  },
  schedule: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  scheduleText: {
    fontSize: 8,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Medium'

  },
  timeTextContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  timeIndicationText: {
    color: '#eb7952',
    paddingLeft: 2,
    marginTop: 0,
    fontFamily: 'Montserrat-Medium',
    fontSize: 10
  },
  progressContainer: {
    // backgroundColor: '#444444',
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 15,
    color: '#FF6B45',
    fontWeight: 'bold',
  },
  tipContainer: {
    backgroundColor: '#444444',
    borderRadius: 10,
    padding: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  contentPosted:{
    fontSize:10
  }
});


export default HomeScreen;
