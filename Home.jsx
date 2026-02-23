import React from "react"
import { Text ,Button} from "react-native-paper"
import { useNavigation } from "@react-navigation/native"
import Contact from './Contact';
const Home = () => {
    const Navigation = useNavigation();
    return (
        <>
        <Text>This is Home Screen</Text>
        <Button onPress={()=>{
            Navigation.navigate("Contact",{
                "userId":123
            })
        }}>Move to Contact Screen</Button>
        </>
    )
}
export default Home;