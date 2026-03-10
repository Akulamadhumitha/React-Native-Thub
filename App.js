import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet,FlatList} from "react-native"
import { Button,IconButton } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as LocalAuthentication from "expo-local-authentication"
const App = () => {
    
  const Open = async() => {
     const status = await LocalAuthentication.hasHardwareAsync();
     console.log("hardware",status);
     const isEnrolled = await LocalAuthentication.isEnrolledAsync();
     console.log("enrolled",isEnrolled);
     const result = await LocalAuthentication.authenticateAsync();
  }
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>
       <View>
         <Button onPress={Open}>Click</Button>
        </View>
      </SafeAreaView>

      </>
    )
}
export default App;

