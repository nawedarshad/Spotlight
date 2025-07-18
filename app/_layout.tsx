import { ClerkProvider } from '@clerk/clerk-expo'
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { tokenCache } from '@clerk/clerk-expo/token-cache'


export default function RootLayout() {
  return (
<ClerkProvider tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1, backgroundColor: "black"}}>
    <Stack initialRouteName="(auth)">
  <Stack.Screen name="(auth)" options={{ headerShown: false }} />
  <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
</Stack>

      </SafeAreaView>
    </SafeAreaProvider>
    </ClerkProvider>
)}




