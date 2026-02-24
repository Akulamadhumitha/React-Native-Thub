import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { Button,Icon } from "react-native-paper";
import { SafeAreaView} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const TabNavigation = () => {
  
  const BottomTabNavigator = createBottomTabNavigator();
  

  return (
    
    
    // <SafeAreaView style={{ flex: 1}}>
    // <StatusBar style="dark" backgroundColor="green"/>
    
    
      <BottomTabNavigator.Navigator
           screenOptions={({route})=>({
            tabBarIcon:({focused,color})=>{
               let iconName;
               if(route.name=="Home"){
                   iconName = focused ? "home" : "home-outline";
               }
               if(route.name=="Contact"){
                iconName = focused ? "account-circle" : "account-circle-outline";
               }
               return <Icon source={iconName} size={30} color={"color"}/>
            },
            tabBarActiveTintColor : "green",
            tabBarInactiveTintColor : "black",
            headerShown:false
           })}
      >
        <BottomTabNavigator.Screen name="Home" component={Home}/>
        <BottomTabNavigator.Screen name="Contact" component={Contact}/>
      </BottomTabNavigator.Navigator>
    
    

  // </SafeAreaView>
  
)

}
export default TabNavigation;


