import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "expo-router";

export default function ConfirmationModal({ 
  visible, 
  onClose, 
  text
}: { 
  visible: boolean; 
  onClose: () => void; 
  text: string;
}) {
  const getNextQueueNumber = useMutation(api.queue.getNextQueueNumber);
  const router = useRouter();

  const handleProceed = async () => {
    try {
      console.log("⏳ Requesting queue number from Convex...");
      const number = await getNextQueueNumber({});
      console.log("✅ Queue number received:", number);

      onClose();
      router.replace("/(tabs)/waiting");
    } catch (error) {
      console.error("❌ Failed to get queue number from Convex:", error);
    }
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-[#48426D] p-6 rounded-xl w-80 shadow-lg">
          <Text className="text-[#F0C38E] text-lg font-semibold text-center mb-4">
            Proceed with {text}?
          </Text>
          <View className="flex-row justify-between mt-4">
            <TouchableOpacity onPress={onClose} className="bg-gray-400 px-5 py-2 rounded-lg">
              <Text className="text-white">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleProceed} className="bg-[#F0C38E] px-5 py-2 rounded-lg">
              <Text className="text-[#312C51] font-semibold">Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
