import React from "react"
import TopBarNavigation from "./TopBarNavigation"
import { SafeAreaProvider } from "react-native-safe-area-context"
const App = () => {
    return (
      <SafeAreaProvider>
        <TopBarNavigation />
      </SafeAreaProvider>
    )
}
export default App;