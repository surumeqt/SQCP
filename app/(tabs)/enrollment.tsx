import { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import MenuButton from "@/components/MenuButton";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useModalHandler } from "@/hooks/useModalHandler";

export default function Enrollment() {
  const router = useRouter();
  const { menuOptions, selectedText, openModal, closeModal } = useModalHandler("enrollment");
  const [queueNumber, setQueueNumber] = useState<number | null>(null);

  const handleProceed = (queueNum: number) => {
    console.log("✅ Queue number in parent:", queueNum);
    setQueueNumber(queueNum);
    closeModal();
    
    console.log("🔄 Navigating to /waiting with queueNumber:", queueNum);
    router.replace({
      pathname: "/waiting",
      params: { queueNumber: queueNum.toString() }
    });
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-3xl font-bold text-center mb-6">
        Enrollment Services
      </Text>

      <View className="w-full max-w-md space-y-4">
        {menuOptions.map((option) => (
          <MenuButton key={option} text={option} onPress={() => openModal(option)}/>
        ))}
      </View>

      <ConfirmationModal 
        visible={!!selectedText} 
        onClose={closeModal} 
        text={selectedText || ""} 
        onProceed={handleProceed} // ✅ Logs queue number & navigation
      />
    </View>
  );
}
