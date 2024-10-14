import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CustomText from '../../Helpers/CustomText';
import Calendar from '../Common/Calendar';


const Track = ({ navigation }:any) => {
  
  const [tasks] = useState([
    { id: '1', title: 'Task 1', tag: 'Research' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
    { id: '4', title: 'Task 4' },
    { id: '5', title: 'Task 5' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="arrow-back" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <CustomText style={styles.title}>Content Calendar</CustomText>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Calendar />
        <TouchableOpacity style={styles.calendarIcon}>
            <Icon name="tune" size={30} color="#FFFFFF" />
          </TouchableOpacity>
      </View>

      {/* Tasks Section */}
      <ScrollView style={styles.tasksContainer}>
        {tasks.map((item) => (
          <TouchableOpacity onPress={() => navigation.navigate('ContentDetails')}>
            <View key={item.id} style={styles.taskItem}>
              <Text style={styles.taskText}>{item.title}</Text>
              {item.tag && <Text style={styles.taskTag}>{item.tag}</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
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
  calendarContainer: {
    marginBottom: 10,
  },
  calendarIcon: {
    // position: 'absolute',
    right: 10,
    alignItems:'flex-end'
  },
  tasksContainer: {
    flexGrow: 1,
    backgroundColor: '#1A1A1A',
  },
  taskIcon: {
    padding: 15,
    marginBottom: 0,
    marginTop: 20
  },
  taskItem: {
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 15,
    minHeight:100
  },
  taskText: {
    color: '#F5F5F5',
    fontSize: 12,
    fontWeight: 'bold',
  },
  taskTag: {
    backgroundColor: '#F5F5F5',
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 15,
    fontSize: 10,
    position: 'absolute',
    right: 8,
    top: 8,
  },
});

export default Track;
