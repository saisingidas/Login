import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function ProfilePage({ theme, toggleTheme, darkMode }) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    console.log('You are now signed out.');
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.container, theme.container]}>
      {/* Profile Avatar and Join Date */}
      <View style={styles.profileSection}>
        <Avatar.Image
          size={150}
          style={styles.avatar}
          source={require('../../../assets/sai.png')}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.textGray, theme.textGray]}>Joined</Text>
          <Text style={[styles.year, theme.year]}>2 years ago</Text>
        </View>
      </View>

      {/* Name */}
      <View style={styles.nameContainer}>
        <Text style={[styles.firstName, theme.first]}>Reiven</Text>
        <Text style={[styles.lastName, theme.second]}>Tacang</Text>
      </View>

      {/* Profile Management */}
      <View style={[styles.section, theme.container]}>
        <Text style={[styles.sectionTitle, theme.title]}>profile</Text>
        <View style={styles.manageContainer}>
          <View style={styles.circleIcon}>
            <FontAwesome5 name="dot-circle" size={24} color="coral" />
          </View>
          <TouchableOpacity style={styles.manageButton}>
            <Text style={[styles.manageText, theme.text]}>Manage user</Text>
            <View style={styles.arrowIcon}>
              <FontAwesome name="chevron-right" size={15} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Settings */}
      <View style={[styles.section, theme.container]}>
        <Text style={[styles.sectionTitle, theme.title]}>Settings</Text>
        
        {/* Notifications */}
        <View style={styles.settingsOption}>
          <View style={styles.circleIcon}>
            <MaterialIcons name="notifications-none" size={24} color="black" />
          </View>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={[styles.optionText, theme.text]}>Notifications</Text>
            <View style={styles.arrowIcon}>
              <FontAwesome name="chevron-right" size={15} color="gray" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Dark Mode */}
        <View style={styles.settingsOption}>
          <View style={styles.circleIconDark}>
            <Feather name="moon" size={24} color="royalblue" />
          </View>
          <TouchableOpacity style={styles.optionButton} onPress={toggleTheme}>
            <Text style={[styles.optionTextDark, theme.text]}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Text>
            <View style={styles.arrowIcon}>
              <FontAwesome name="chevron-right" size={15} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign Out Button */}
      <View style={[styles.signOutContainer, theme.container]}>
        <Button
          mode="contained"
          onPress={handleSignOut}
          contentStyle={styles.signOutButtonContent}
          labelStyle={[styles.signOutText, theme.textBlack]}
          style={[styles.signOutButton, theme.textBlack]}
        >
          Sign Out
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    padding: 20,
  },
  textGray: {
    fontSize: 16,
    fontFamily: 'medium',
  },
  year: {
    fontSize: 18,
    fontFamily: 'semiBold',
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  firstName: {
    fontSize: 30,
    fontFamily: 'extraBold',
  },
  lastName: {
    fontSize: 30,
    color: 'gray',
    fontFamily: 'extraBold',
    marginTop: -20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'semiBold',
    marginBottom: 10,
  },
  manageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  manageText: {
    fontSize: 18,
    marginRight: 65,
    fontFamily: 'regular',
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'mistyrose',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lavender',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  optionText: {
    fontSize: 18,
    marginRight: 70,
    fontFamily: 'regular',
  },
  circleIconDark: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#cce5ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTextDark: {
    fontSize: 18,
    marginRight: 82,
    fontFamily: 'regular',
  },
  signOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  signOutButton: {
    width: 150,
    borderRadius: 30,
    backgroundColor: '#ccddff',
    elevation: 2,
  },
  signOutButtonContent: {
    height: 50,
  },
  signOutText: {
    fontSize: 16,
    color: '#0055ff',
    textAlign: 'center',
    fontFamily: 'medium',
  },
});
