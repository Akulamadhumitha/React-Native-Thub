import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { Button,Icon } from "react-native-paper";
import { SafeAreaView} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import '@react-native-screen'

const App = () => {
  
  const stack = createNativeStackNavigator();
  

  return (
    
    
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="green"/>
    
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          // headerStyle:{
          //   backgroundColor:"yellow"
          // },
          headerTintColor:"blue",
          headerTitleStyle:{
            fontSize:22
          },
          headerTitleAlign:"center",
          headerRight:()=><Icon source={"bell"} size={22}/>,
          animation:"fade"

        }}
      >
        <stack.Screen name="Home" component={Home}/>
        <stack.Screen name="Contact" component={Contact}/>
      </stack.Navigator>
    </NavigationContainer>
    

  </SafeAreaView>
  
)

}
export default App;

const MyStyles = StyleSheet.create({
     
     
})
