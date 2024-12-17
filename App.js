import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';



const NavigationButton = ({ title, onPress }) => {
  return (
    <Button title={title} onPress={onPress} />
  );
};

function Title({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
    
      <NavigationButton title="Ir a Home" onPress={() => navigation.navigate('Home')} />
      <StatusBar style="auto" />
    </View>
  );
}
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    
      <NavigationButton title="Ir a la Pantalla de Detalles" onPress={() => navigation.navigate('Details')} />
      <StatusBar style="auto" />
    </View>
  );
}

function Details() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Title">
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});