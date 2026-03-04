import React from "react"
import { useState } from "react"
import {Image,Text,View,StyleSheet,FlatList} from "react-native"
import { Button,IconButton } from "react-native-paper"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"
import * as Imagepicker from "expo-image-picker"
const App = () => {
  const [ImagePath,setImagePath] = useState([]);
  const FromGallery = async() => {
        const responce = await Imagepicker.requestMediaLibraryPermissionsAsync();
        if(!responce.granted){
          alert("Please give Access to me");
          return;
        }
        const data = await Imagepicker.launchImageLibraryAsync({
          mediaTypes:"images",
          allowsMultipleSelection:true,
          allowsEditing:false,
          quality:1
        })
        setImagePath(data.assets);
  };
  const DeleteOption = (idx) => {
      setImagePath((prevImages)=>
        prevImages.filter((_,i)=>i!=idx))
  };
    return (
      <>
      <SafeAreaView style={{flex:1}}>
        <StatusBar style="dark" backgroundColor="green"/>

        <View style={MyStyles.parentView}>
          <Button mode="contained" onPress={FromGallery}>ADD</Button>
        </View>
        {
        ImagePath.length > 0 ? (
        <FlatList
          data={ImagePath}
          keyExtractor={(item)=>item.uri}
          numColumns={2}
          renderItem={({item,index})=>(
            <View style={MyStyles.imageWrapper}>
            <Image
              source={{uri:item.uri}}
              style={MyStyles.imageStyling}
            />
            <IconButton
              icon="delete"
              iconColor="white"
              size={16}
              style={MyStyles.deleteIcon}
              onPress={()=>DeleteOption(index)}
            />
            </View>
          )}
          
          // contentContainerStyle={{ padding: 10 }}
        />
      )
        : (
          <Text style={{ textAlign: "center", marginTop: 20 }}>
      No Image Selected!
    </Text>
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
  imageWrapper: {
  width: 160,
  height: 160,
  margin: 10,
},

imageStyling: {
  width: "100%",
  height: "100%",
  borderRadius: 10,
},

deleteIcon: {
  position: "absolute",
  top: 5,
  right: 5,
  backgroundColor: "rgba(0,0,0,0.6)"
}
})