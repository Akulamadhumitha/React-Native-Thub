import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { Button,Icon } from "react-native-paper";
import { SafeAreaView} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Home from './Home';
import Contact from './Contact';
import TabNavigation from "./TabNavigation";
import Profile from "./Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const App = () => {
  
  const Stack = createNativeStackNavigator();
  

  return (
    
    
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="green"/>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="TabNavigation" component={TabNavigation}/>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
    </NavigationContainer>
    
    

  </SafeAreaView>
  
)

}
export default App;


