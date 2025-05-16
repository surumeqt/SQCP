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
      await getNextQueueNumber({});
      router.replace("/(tabs)/waiting");
      onClose();
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

export const LogoutModal = ({
  visible,
  onClose,
  handleLogout,
}: {
  visible: boolean;
  onClose: () => void;
  handleLogout: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-80 bg-[#48426D] p-6 rounded-2xl shadow-md">
          <Text className="text-lg font-bold text-[#F1AA9B] mb-4 text-center">
            Confirm Logout
          </Text>
          <Text className="text-white text-center mb-4">
            Are you sure you want to log out?
          </Text>

          <View className="flex-row justify-center mt-4">
            <TouchableOpacity
              onPress={onClose}
              className="bg-[#F0C38E] py-3 px-6 rounded-lg mr-3"
            >
              <Text className="text-[#312C51] font-semibold text-lg">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleLogout}
              className="bg-[#F1AA9B] py-3 px-6 rounded-lg ml-3"
            >
              <Text className="text-[#312C51] font-semibold text-lg">
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const StopEntryModal = ({
  visible,
  onClose,
  handleStop,
}:{
  visible: boolean;
  onClose: () => void;
  handleStop: () => void;
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-90 bg-[#48426D] p-6 rounded-2xl shadow-md">
          <Text className="text-xl font-bold text-[#F1AA9B] mb-4 text-center">
            Stop Entry
          </Text>
          <Text className="text-white text-center mb-4">
            Are you sure you want to stop your entry? {'\n'}
            This will remove you from the queue, {'\n'}
            You can rejoin the queue later.
          </Text>

          <View className="flex-row justify-center mt-4">
            <TouchableOpacity
              onPress={onClose}
              className="bg-[#F0C38E] py-3 px-6 rounded-lg mr-3"
            >
              <Text className="text-[#312C51] font-semibold text-lg">
                Cancel
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleStop}
              className="bg-[#F1AA9B] py-3 px-6 rounded-lg ml-3"
            >
              <Text className="text-[#312C51] font-semibold text-lg">
                Stop
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export const EjectNotifModal = ({ visible, onClose }: { visible: boolean; onClose: () => void } ) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-90 bg-[#48426D] p-6 rounded-2xl shadow-md">
          <Text className="text-xl font-bold text-[#F1AA9B] mb-4 text-center">
            Ejection Notification
          </Text>
          <Text className="text-white text-center mb-4">
            You have been ejected from the queue. {'\n'}
          </Text>

          <View className="flex-row justify-center mt-4">
            <TouchableOpacity
              onPress={onClose}
              className="bg-[#F0C38E] py-3 px-6 rounded-lg mr-3"
            >
              <Text className="text-[#312C51] font-semibold text-lg">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}