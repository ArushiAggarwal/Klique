import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from '../../Helpers/CustomText';


const Plan = () => {

  const [selectedTab, setSelectedTab] = useState('Content');
  const [contentList, setContentList] = useState([
    { id: '1', content: 'Content 2' },
    { id: '2', content: 'Content 1' },
  ]);
  const [newContent, setNewContent] = useState('');

  const addContent = () => {
    if (newContent.trim()) {
      setContentList([{ id: Date.now().toString(), content: newContent }, ...contentList]);
      setNewContent('');
    }
  };

  const deleteContent = (id:any) => {
    setContentList(contentList.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <CustomText style={styles.title}>Plan</CustomText>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="arrow-forward" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Section */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Content' && styles.activeTab]}
          onPress={() => setSelectedTab('Content')}
        >
          <CustomText style={styles.tabText}>Content</CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Platform' && styles.activeTab]}
          onPress={() => setSelectedTab('Platform')}
        >
          <CustomText style={styles.tabText}>Platform</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="tune" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content Section */}
      <ScrollView>
        {/* Content List Section */}
        <FlatList
          data={contentList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.contentItem}>
              <TouchableOpacity style={styles.checkbox}>
                <Icon name="radio-button-unchecked" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <View style={styles.contentBox}>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
              <TouchableOpacity style={styles.iconButton} onPress={() => deleteContent(item.id)}>
                <Icon name="delete" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          )}
          scrollEnabled={false} // Disable scrolling in FlatList as it's inside ScrollView
        />

        {/* Add New Content Section */}
        <View style={styles.addContent}>
          <TextInput
            style={styles.addContentInput}
            placeholder="Add new content"
            placeholderTextColor="#AAA"
            value={newContent}
            onChangeText={setNewContent}
          />
          <TouchableOpacity style={styles.iconButton} onPress={addContent}>
            <Icon name="add" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // scrollContainer: {
  //   flexGrow: 1,
  // },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16
    // paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
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
    fontSize: 30,
    color: '#FFFF66', // Light yellow color for the title
    // fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tabText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#0056FF',
  },
  contentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#333',
    borderRadius: 25,
    padding: 10,
    marginBottom: 0,
  },
  checkbox: {
    padding: 2,
  },
  contentBox: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 10,
    minHeight:50
  },
  contentText: {
    fontSize: 14,
    color: '#FFF',
  },
  addContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    borderColor:'#f5f5f5',
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 20,
    paddingLeft: 20,
    marginHorizontal: 20,
  },
  addContentInput: {
    flex: 1,
    color: '#FFF',
    paddingHorizontal: 0,
    fontSize: 14,
  },
});

export default Plan;
