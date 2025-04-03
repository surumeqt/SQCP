import { Text, TouchableOpacity } from "react-native";

export default function MenuButton({ text, onPress }: { 
  text: string; 
  onPress: () => void; 
}) {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      className="w-full bg-[#F0C38E] py-4 rounded-2xl items-center active:scale-95 shadow-lg my-2"
    >
      <Text className="text-[#312C51] text-lg font-semibold">{text}</Text>
    </TouchableOpacity>
  );
}
