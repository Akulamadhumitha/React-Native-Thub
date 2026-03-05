import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet,FlatList} from "react-native"
import { Button,IconButton } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Imagepicker from "expo-image-picker"
import * as Sharing from "expo-sharing"
const App = () => {
  const [ImagePath,setImagePath] = useState(null);
  const [ShareBtn,setShareBtn] = useState(true);
  const Choose = async() => {
      const responce = await Imagepicker.getMediaLibraryPermissionsAsync();
      if(!responce.granted){
        alert("Not permitted!");
        return;
      }
      const data = await Imagepicker.launchImageLibraryAsync({
        mediaTypes:"images",
        quality:1
      });
     setImagePath(data.assets[0].uri);
  };
  const Share = async() => {
      const status = await Sharing.isAvailableAsync();
      if(!status){
        alert("Not allowed to share");
        return;
      }
      await Sharing.shareAsync(ImagePath)
  };
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>
       <View>
        <Button onPress={Choose} mode="contained" style={{width:200,marginLeft:"auto",marginRight:"auto",marginTop:10,marginBottom:10}}>Choose Image</Button>
       </View>
        {
          ImagePath ?
          (<Image source={{uri:ImagePath}} style={{width:200,height:200}}/>)
          :
          (<Text style={{textAlign:"center",padding:20}}>No Image Selected!</Text>)
        }
        <Button onPress={Share} disabled={ ImagePath ? !ShareBtn : ShareBtn} style={{ width:100,marginLeft:"auto",marginRight:"auto",marginTop:10,marginBottom:10}} mode="contained">Share</Button>

      </SafeAreaView>

      </>
    )
}
export default App;

// const MyStyles = StyleSheet.create({
//   parentView:{
//      padding:10,
//      width:260,
//      marginTop:10,
//      marginLeft:"auto",
//      marginRight:"auto"
//   },
//   imageWrapper: {
//   width: 160,
//   height: 160,
//   margin: 10,
// },

// imageStyling: {
//   width: "100%",
//   height: "100%",
//   borderRadius: 10,
// },

// deleteIcon: {
//   position: "absolute",
//   top: 5,
//   right: 5,
//   backgroundColor: "rgba(0,0,0,0.6)"
// }
// })