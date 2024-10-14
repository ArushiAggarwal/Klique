import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomText from '../../Helpers/CustomText';
import Popover from 'react-native-popover-view';

const IdeasDump = () => {

  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const togglePopoverMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  const getPopOverMenu = () => {
    return (
      <Popover
        isVisible={isVisibleMenu}
        popoverStyle={styles.popoverStyle}
        onRequestClose={togglePopoverMenu}
        arrowSize={{
          width: 0,
          height: 0
        }}
        from={(
          <TouchableOpacity onPress={togglePopoverMenu} style={styles.headerButton}>
            <Icon name="menu" size={30} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      >
        <View style={styles.popoverContainer}>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>Story</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>Tutorial</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popoverOption} onPress={() => { }}>
            <Text style={styles.popoverText}>Product</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popoverOption]} onPress={() => { }}>
            <Text style={styles.popoverText}>Transition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popoverOption]} onPress={() => { }}>
            <Text style={styles.popoverText}>Moment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popoverOption, styles.popoverOptionLast]} onPress={() => { }}>
            <Text style={styles.popoverText}>Repurpose</Text>
          </TouchableOpacity>
        </View>
      </Popover >
    );
  };

  const [tasks, setTasks] = useState([{ id: 1, text: '', isEditing: true }]);

  // Function to add a new empty task
  const addNewTask = () => {
    const newTask = { id: tasks.length + 1, text: '', isEditing: true };
    setTasks([...tasks, newTask]);
  };

  // Function to update the text of a task
  const updateTaskText = (id:any, text:any) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  return (
    <Fragment>
      <View style={styles.innerContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerButton}>
            <Icon name="arrow-back" size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <CustomText style={styles.title}>Ideas</CustomText>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerButton}>
              <Icon name="search" size={30} color="#FFFFFF" />
            </TouchableOpacity>
            {getPopOverMenu()}
          </View>
        </View>
        <View style={styles.ideasHolder}>
          <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <TouchableOpacity style={styles.checkbox}>
                  <Icon name="check-box-outline-blank" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <TextInput
                  style={styles.taskInput}
                  placeholder="Enter task"
                  placeholderTextColor="#888888"
                  value={item.text}
                  onChangeText={(text) => updateTaskText(item.id, text)}
                />
              </View>
            )}
          />

          {/* Button to add new task */}
          <TouchableOpacity style={styles.addButton} onPress={addNewTask}>
            <Icon name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
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
  button: {
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 10,
    borderColor: '#F5F5F5', // White border color for button
    borderWidth: 1,
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
  popoverOptionLast: {
    borderBottomWidth: 0,
    paddingVertical: 10
  },
  popoverText: {
    fontSize: 14,
    color: '#F5F5F5',
  },
  ideasHolder:{
    marginTop: 10
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 0
  },
  checkbox: {
    marginRight: 0,
  },
  taskInput: {
    flex: 1,
    fontSize: 14,
    color: '#F5F5F5',
    borderBottomColor: '#444444',
    paddingVertical: 5,
  },
  addButton: {
    padding: 10,
    width: 45
  },
});

export default IdeasDump;
