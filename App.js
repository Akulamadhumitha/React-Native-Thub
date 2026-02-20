import {React, use} from "react";
import { Text,StyleSheet,Image,FlatList, View} from "react-native";
import { Dialog,Button,Chip,Provider,Portal} from "react-native-paper";
import { SafeAreaView ,SafeAreaProvider} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const App = () => {
  
  const [visible, setVisible] = useState(true);

  return (
    <SafeAreaProvider>
    <Provider>
    <SafeAreaView style={{ flex: 1}}>
    <StatusBar style="dark" backgroundColor="green"/>
    <Portal>
      
    <Dialog visible={visible} onDismiss={()=>setVisible(!visible)}>
      <Text style={MyStyles.warningsty}>Warning!</Text>
      <Dialog.Content>
        <Text>Do you really want to change?</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={()=>setVisible(!visible)} mode="contained">YES</Button>
      </Dialog.Actions>
    </Dialog>
    </Portal>

  </SafeAreaView>
  </Provider>
  </SafeAreaProvider>
)

}
export default App;

const MyStyles = StyleSheet.create({
     warningsty:{
      paddingLeft:22,
      paddingBottom:6,
      fontSize:16,
      fontWeight:"bold"
     }
     
})
