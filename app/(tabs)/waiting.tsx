import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function WaitingScreen() {
  const { queueNumber } = useLocalSearchParams<{ queueNumber?: string }>();

  console.log("📝 Queue number received in waiting screen:", queueNumber);

  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-2xl font-bold text-center mb-4">
        Please wait...
      </Text>
      {queueNumber ? (
        <Text className="text-white text-lg text-center">
          Your Queue Number: {queueNumber}
        </Text>
      ) : (
        <Text className="text-red-400 text-lg">No queue assigned.</Text>
      )}
    </View>
  );
}
