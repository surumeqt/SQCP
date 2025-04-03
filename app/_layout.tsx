import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { ActivityIndicator, View, StatusBar } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import "./global.css";

export default function RootLayout() {
  return (
    <ClerkAndConvexProvider>
      <SafeAreaProvider>
          <View style={{ flex: 1, backgroundColor: "#000" }}>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#000"
              translucent={false}
            />
            <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
              <AuthNavigation />
            </SafeAreaView>
          </View>
      </SafeAreaProvider>
    </ClerkAndConvexProvider>
  );
}

function AuthNavigation() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

      if (isSignedIn) {
        console.log("✅ User is signed in, redirecting to home...");
        router.replace("/(tabs)");
      } else if (!isSignedIn) {
        console.log("🔒 User is not signed in, redirecting to auth...");
        router.replace("/(auth)");
      }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
