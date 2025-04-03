import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MenuButton from "@/components/MenuButton";
import Sidebar from "@/components/Sidebar";

export default function Index() {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <View className="flex-1 bg-[#312C51] px-6 pt-12">
      <View className="absolute top-6 right-6">
        <TouchableOpacity onPress={() => setIsSidebarOpen(true)}>
          <Ionicons name="settings-outline" size={28} color="#F0C38E" />
        </TouchableOpacity>
      </View>

      <Text className="text-[#F1AA9B] text-3xl font-bold text-center mb-6 mt-12">
        Welcome to Student Portal
      </Text>

      <View className="w-full max-w-md">
        <MenuButton text="Enrollment & Registration" onPress={() => router.replace("/enrollment")}/>
        <MenuButton text="Academic Records" onPress={() => router.replace("/records")}/>
        <MenuButton text="Financial & Administrative" onPress={() => router.replace("/finance")}/>
        <MenuButton text="Personal Information" onPress={() => router.replace("/profile")}/>
        <MenuButton text="Graduation & Diplomas" onPress={() => router.replace("/graduation")}/>
      </View>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
