import React from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import rcb from './assets/rcb.webp';
import girl from './assets/girl.jpg';
import jesus from './assets/jesus.png';
import google from './assets/google.avif';
import blue from './assets/blue.png';
const App = () => {
  const MyData = [
    {
      id:1,
      profile:rcb,
      Name:"Navya",
      message:"E sala cup namdu!"
    },
    { 
      id:2,
      profile:girl,
      Name:"Deepthi",
      message:"Aim big Achieve big!"
    },
    {
      id:3,
      profile:jesus,
      Name:"Madhu",
      message:"I love jesus!"
    },
    {
      id:4,
      profile:google,
      Name:"Deepika",
      message:"google - dream company!"
    },
    {
      id:5,
      profile:blue,
      Name:"Asha",
      message:"happy happy!"
    }
  ]
  return (
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="#333344"/>
  <FlatList
    data={MyData}
    renderItem={({ item }) => (
      <View style={MyStyles.parentView}>
        {/* profile img div */}
        <View>
          <Image source={item.profile} style={MyStyles.imageSty}/>
        </View>

        {/* details div */}
        <View style={MyStyles.detailsView}>
          <Text style={MyStyles.detailsOfText}>{item.Name}</Text>
          <Text>{item.message}</Text>
        </View>
      </View>
    )}
    
  />
  </SafeAreaView>
)

}
export default App;

const MyStyles = StyleSheet.create({
     mytext:{
      color:"green",
      fontSize:24
     },
     parentView:{
      width:"100%",
      flexDirection:"row",
      marginTop:30,
      backgroundColor:"aliceblue",
      
      padding:10
     },
     imageSty:{
      width:100,
      height:100,
      borderRadius:25
     },
     detailsView:{
      justifyContent:"center",
      paddingLeft:20,
      gap:10
     },
     detailsOfText:{
      fontSize:22,
      fontWeight:"bold"
     }
})
