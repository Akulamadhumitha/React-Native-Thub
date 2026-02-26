import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { Button,Icon } from "react-native-paper";
import { useState } from "react";
import Home from './Home';
import Contact from './Contact';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";


const TopBarNavigation = () => {
    const TopTab = createMaterialTopTabNavigator();
    const data = useSafeAreaInsets();
    console.log(data);
  return (
    
    <NavigationContainer>
      <TopTab.Navigator 
           screenOptions={({route})=>({
            tabBarIcon:({focused,color})=>{
                let iconName;
                if(route.name=="Home") {
                    iconName = focused ? "home" : "home-outline";
                }
                if(route.name=="Contact"){
                    iconName = focused ? "account-circle" : "account-circle-outline";
                }

                return <Icon source={iconName} size={28} color={color}/>
            },








           tabBarActiveTintColor:"green",
           tabBarInactiveTintColor:"black",
           tabBarIndicatorStyle:{
                 backgroundColor:"green",
                 height:3
           },
            tabBarStyle:{
                paddingTop:data.top
             },
             tabBarItemStyle:{
              flexDirection:"row"
             }
           })}
      >
        <TopTab.Screen name="Home" component={Home}/>
        <TopTab.Screen name="Contact" component={Contact}/>
      </TopTab.Navigator>
    </NavigationContainer>
    
  
)

};
export default TopBarNavigation;


