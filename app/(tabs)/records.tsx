import { View, Text } from "react-native";
import MenuButton from "@/components/MenuButton";
import ConfirmationModal from "@/components/ConfirmationModal";
import { useModalHandler } from "@/hooks/useModalHandler";

export default function Records() {
  const { menuOptions, selectedText, openModal, closeModal, proceed } = useModalHandler("records");

  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-3xl font-bold text-center mb-6">
        Academic Records
      </Text>

      <View className="w-full max-w-md space-y-4">
        {menuOptions.map((option) => (
          <MenuButton key={option} text={option} onPress={() => openModal(option)} />
        ))}
      </View>

      <ConfirmationModal 
        visible={!!selectedText} 
        onClose={closeModal} 
        text={selectedText || ""}
        onProceed={proceed} 
      />
    </View>
  );
}
