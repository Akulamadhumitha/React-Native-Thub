import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet} from "react-native"
import { Button } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Imagepicker from "expo-image-picker"
const App = () => {
  const [ImagePath,setImagePath] = useState(null);
  const FromGallery = async() => {
        const responce = await Imagepicker.requestMediaLibraryPermissionsAsync();
        if(!responce.granted){
          alert("Please give Access to me");
          return;
        }
        const data = await Imagepicker.launchImageLibraryAsync({
          allowsEditing:true,
          quality:1
        })
        setImagePath(data.assets[0].uri);
  };
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>

        <View style={MyStyles.parentView}>
          <Button mode="contained" onPress={FromGallery}>Chose from Gallery</Button>
        </View>
        {
  !ImagePath ? (
    <Text>No Image Selected!</Text>
  ) : (
    <Image source={{ uri: ImagePath }} style={MyStyles.imageStyling}/>
  )
}

      </SafeAreaView>

      </>
    )
}
export default App;

const MyStyles = StyleSheet.create({
  parentView:{
     padding:10,
     width:260,
     marginTop:10,
     marginLeft:"auto",
     marginRight:"auto"
  },
  imageStyling:{
     width: 200, 
     height: 200,
     marginLeft:20
     
  }
})