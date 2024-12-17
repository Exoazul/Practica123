import react from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

function Details() {
    return (
      <View style={styles.container}>
        <Text>Details</Text>
        <StatusBar style="auto" />
      </View>
    );
  }