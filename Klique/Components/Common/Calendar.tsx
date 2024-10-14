import React, { Fragment, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import CustomText from '../../Helpers/CustomText';

const Calendar = () => {
  // Initialize current date state
  const [currentDate, setCurrentDate] = useState(moment());
  const [isWeekView, setIsWeekView] = useState(false);

  // Functions to navigate between months
  const goToPreviousMonth = () => {
    setCurrentDate(currentDate.clone().subtract(1, 'month'));
  };

  const goToNextMonth = () => {
    setCurrentDate(currentDate.clone().add(1, 'month'));
  };

  // Get the current month's days and other date details
  const daysInMonth = currentDate.daysInMonth();
  const startOfMonth = currentDate.clone().startOf('month').day(); // Day of the week for the 1st date
  const monthName = currentDate.format('MMMM');
  const year = currentDate.format('YYYY');

  // Generate the list of dates for the calendar
  const dates = [];
  for (let i = 0; i < startOfMonth; i++) {
    dates.push(null); // Empty dates to align the first day
  }
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push(i);
  }

   // Get current week
   const currentWeek = [];
   const startOfWeek = currentDate.clone().startOf('week');
   for (let i = 0; i < 7; i++) {
     currentWeek.push(startOfWeek.clone().add(i, 'days'));
   }

  const toggleCalendarView = () => {
    setIsWeekView(!isWeekView);
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.monthYearContainer}>
        <TouchableOpacity onPress={goToPreviousMonth}>
          <Icon name="keyboard-arrow-left" size={20} color="#636262" style={styles.arrowIcon} />
        </TouchableOpacity>
        <CustomText style={styles.monthText}>{monthName}</CustomText>
        <Text style={styles.yearText}>{year}</Text>
        <TouchableOpacity onPress={goToNextMonth}>
          <Icon name="keyboard-arrow-right" size={20} color="#636262" style={styles.arrowIcon} />
        </TouchableOpacity>

        {/* Two-line Hamburger Menu Button */}
        <TouchableOpacity style={styles.hamburgerButton} onPress={toggleCalendarView}>
          <Icon name="menu" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>


      {/* Dates for the Calendar (Conditional Rendering based on isWeekView) */}
      {isWeekView ? (
        <View style={styles.weekViewContainer}>
          {currentWeek.map((day, index) => (
            <View key={index} style={styles.weekDayItem}>
              <Text style={styles.weekDayLabel}>{['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}</Text>
              <CustomText style={styles.weekDayNumber}>{day.date()}</CustomText>
            </View>
          ))}
        </View>
      ) : (
        <Fragment>
          <View style={styles.weekDaysContainer}>
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
              <Text key={day + i} style={styles.weekDayText}>{day}</Text>
            ))}
          </View>
          <View style={styles.datesContainer}>
            {dates.map((date, index) => (
              <Text key={index} style={[styles.dateText, date ? {} : styles.emptyDate]}>
                {date || ''}
              </Text>
            ))}
          </View>
        </Fragment>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calendarContainer: {
    paddingHorizontal: 0,
    paddingVertical: 15
  },
  monthYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 15,
    color: '#FFF',
    marginRight: 5,
  },
  yearText: {
    fontSize: 10,
    color: '#FF6B45',
    marginLeft: 5,
    fontFamily: 'Montserrat-Bold'
  },
  arrowIcon: {
    paddingHorizontal: 10,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    alignItems: 'center',
  },
  weekDayText: {
    color: '#8A8A8A',
    fontSize: 12,
    textAlign: 'center',
    flex: 1,
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dateText: {
    color: '#FFFFFF',
    fontSize: 12,
    width: '14.28%', // Ensures each date takes 1/7th of the width
    textAlign: 'center',
    paddingVertical: 5,
  },
  emptyDate: {
    color: 'transparent', // Hides empty slots for alignment
  },
  hamburgerButton: {
    marginLeft: 'auto', // Push the button to the right side
    right: 10
  },
  weekViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 12
  },
  weekDayItem: {
    backgroundColor: '#444444',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  weekDayLabel:{
    color: '#8A8A8A',
    fontSize: 12,
    // fontWeight: 'bold',
    paddingBottom: 8,
    fontFamily: 'Montserrat-Bold'
  },
  weekDayNumber: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Montserrat-Bold'
  },
});

export default Calendar;
