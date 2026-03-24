import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet,FlatList} from "react-native"
import { Button,IconButton } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification:async()=>({
    shouldPlaySound:true,
    shouldShowBanner:true,
    // shouldSetBadge:true
  })
})
const App = () => {
    const GetToken = async() => {
       const permission = await Notifications.getPermissionsAsync();
       if(!permission.granted){
        await Notifications.requestPermissionsAsync();
        return;
       }
       const Data = Notifications.getExpoPushTokenAsync();
       console.log(Data);
    };
  
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>
       <View>
         <Button onPress={GetToken}>Get Notified</Button>
        </View>
      </SafeAreaView>

      </>
    )
}
export default App;

