import {React} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  const Capture = (data) => {
    const upper = /[A-Z]/.test(data);
    const lower = /[a-z]/.test(data);
    const specChar = /[^A-Za-z0-9]/.test(data);
    const num = /[0-9]/.test(data);
    const len = data.length>=8;
    setstate(upper && lower && specChar && num && len)
  };
  const [state,setstate] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="green"/>
    
    <TextInput 
      onChangeText={(data)=>Capture(data)}
      label={"password"}
      error={!state}
      mode="contained"
      secureTextEntry
    />
    <HelperText
      
    >
    Enter input
    </HelperText>

  </SafeAreaView>
)

}
export default App;

const MyStyles = StyleSheet.create({
     
})
