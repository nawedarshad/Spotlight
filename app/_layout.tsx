import { ClerkProvider } from '@clerk/clerk-expo'
import InitialLayout from '@/components/InitialLayout';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { tokenCache } from '@clerk/clerk-expo/token-cache'


export default function RootLayout() {
  return (
<ClerkProvider tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: "black"}}>
        <InitialLayout />
      </SafeAreaView>
    </SafeAreaProvider>
    </ClerkProvider>
)}




