import { Platform } from "react-native";
import { ExpoRoot } from "expo-router";
import { registerRootComponent } from "expo";

const ctx =
  Platform.OS === "web"
    ? require.context("../admin")
    : require.context("../app");

export default function App() {
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
