import React from "react";
import { Button, Text } from "react-native-paper";
import Home from './Home';
import { useNavigation ,useRoute} from "@react-navigation/native";
const Contact = () => {
    const Navigation = useNavigation();
    const routesData = useRoute();
    console.log(routesData.params);
    return (
        <>
        <Text>Welcome to the Contact Screen</Text>
        <Button onPress={()=>{
            Navigation.navigate("Home")
        }}>Move to Home Screen</Button>
        </>
    )
};
export default Contact;