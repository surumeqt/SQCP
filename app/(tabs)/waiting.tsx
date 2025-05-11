import { View, Text, BackHandler, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "../../convex/_generated/api";
import { Id } from '@/convex/_generated/dataModel'
import { StopEntryModal } from "@/components/ConfirmationModal";

export default function WaitingScreen() {
  const router = useRouter();
  const deleteEntry = useMutation(api.queue.deleteQueueEntry);
  const [ showModal, setShowModal ] = useState(false);
  const checkEntry = useQuery(api.queue.getActiveQueueEntryForUser);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  const handleStopPress = async () => {
    try{
      await deleteEntry({ id: checkEntry?._id as Id<"queue"> });
      console.log("Queue entry deleted successfully.");
      router.replace("/(tabs)");
    } catch (error) {
      console.error("❌ Failed to delete queue entry:", error);
    }
  };

  // Prevent back navigation
  useFocusEffect(() => {
    const onBackPress = () => true;

    const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

    return () => {
      subscription.remove();
    };
  });

  // Timer countdown logic
  useEffect(() => {
    if (!checkEntry?.expiresAt) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((checkEntry.expiresAt - now) / 1000));

      const hours = Math.floor(diff / 3600);
      const minutes = Math.floor((diff % 3600) / 60);
      const seconds = diff % 60;

      const formatted = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      setTimeLeft(formatted);

      if (diff === 0) {
        clearInterval(interval);
        router.replace("/(tabs)");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [checkEntry?.expiresAt]);

  // 🚫 Auto-redirect if no active entry or isActive is false
  useEffect(() => {
    if (checkEntry === null || checkEntry?.isActive === false) {
      console.log("No active queue entry or entry is inactive.");
      router.replace("/(tabs)");
    }
  }, [checkEntry]);

  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-2xl font-bold text-center mb-4">
        Please wait...
      </Text>

      {checkEntry ? (
        <>
          <Text className="text-white text-lg text-center mb-2">
            Your Queue Number: {checkEntry.number}
          </Text>
          <Text className="text-[#F0C38E] text-lg text-center">
            Time Left: {timeLeft ?? "Loading..."}
          </Text>
          <TouchableOpacity className="bg-[#F1AA9B] rounded-full px-4 py-2 mt-4 w-[60%]" onPress={() => setShowModal(true)}>
            <Text className="text-white text-lg text-center">Stop</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text className="text-red-400 text-lg">No queue assigned.</Text>
      )}
      <StopEntryModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        handleStop={handleStopPress}
      />
    </View>
  );
}
