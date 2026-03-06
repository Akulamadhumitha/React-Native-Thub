import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet,FlatList} from "react-native"
import { Button,IconButton } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Imagepicker from "expo-image-picker"
import * as Sharing from "expo-sharing"
import {CameraView,useCameraPermissions} from "expo-camera"
const App = () => {
  const [Frames,setFrames] = useState(null);
  const [ImagePath,setImagePath] = useState(null);
  const [Permissions,RequestCamAccess] = useCameraPermissions();
  console.log(Permissions);
  if(!Permissions){
    return (
      <Text>Loading...</Text>
    )
  }
  if(!Permissions.granted){
    return  <Button onPress={()=>RequestCamAccess}>Request Cam Access</Button>
  }
  const Capture = async() => {
         if(Frames){
          const Picture = await Frames.takePictureAsync();
          setImagePath(Picture.uri);
         }
  }
  
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>
       <View>
        
        <CameraView
       style={{width:300,height:300}}
       facing="back"
       ref={(ref)=>setFrames(ref)}
        />
       <Button onPress={Capture} mode="contained" style={{width:200,marginLeft:"auto",marginRight:"auto",marginTop:10,marginBottom:10}}>Take Picture</Button>
       </View>
       {
        ImagePath ? (
          <Image source={{uri:ImagePath}} style={{width:200,height:200}} />
        )
        : (
          <Text>No image selected!</Text>
        )
       }
      </SafeAreaView>

      </>
    )
}
export default App;

