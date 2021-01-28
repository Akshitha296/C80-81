import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Alert, Image, Modal, ScrollView } from 'react-native';
import MyHeader from '../components/myHeader'
import db from '../config'
import firebase from 'firebase'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {AppTabNavigator} from '../screens/AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingsScreen from './SettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    }, 

    Settings: {
        screen: SettingsScreen
    }
    }, 
    {
        contentComponent: CustomSideBarMenu
    }, 
    {
        initialRouteName: 'Home'
    }
)