import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { HelperText, TextInput ,Button,Chip} from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  
  const [chiplist,setchiplist] = useState([]);
  const [text,settext]=useState("");
  const [disable,setdisable]=useState(false);
  const [helper,sethelper]=useState(true);
  const Add = () => {
    if(text.trim() === "") return;

    setchiplist(prev => [...prev,text]);
    settext("");
  };
  const Delete = (idx) => {
    setchiplist(chiplist.filter((_,i) => i!==idx));
  };
  return (
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="green"/>
    
    <TextInput
      onChangeText={(data)=>settext(data)}
      label={"Enter Skill"}
      mode="view"
      disabled={chiplist.length == 5 ? (!disable) : (disable)}
    />
    <Button mode="contained" style={MyStyles.myButton} onPress={Add}
      disabled={chiplist.length == 5 ? (!disable) : (disable)}

    >Add Skill</Button>
    <HelperText 
    visible={chiplist.length > 0 ? (!helper) : (helper)}
    style={MyStyles.helperText}>
      No skills are added here.
    </HelperText>
    {
      chiplist.map((ele,idx)=>(
        <View style={MyStyles.chipView}>
        <Chip
        // key={idx}
        closeIcon="close-circle"
        // onClose={()=>console.log("closed")}
        onClose={()=>Delete(idx)}
        >
          {ele}
        </Chip>
        </View>
      ))
    }

  </SafeAreaView>
)

}
export default App;

const MyStyles = StyleSheet.create({
     myButton:{
      marginTop:10,
      width:150,
      marginLeft:"28%",
     },
     helperText:{
      marginTop:10
     }
     
})
