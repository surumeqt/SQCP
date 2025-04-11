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

      <Text className="text-[#F1AA9B] text-3xl font-light text-center mb-6 mt-12">
        Welcome to Student Process Queuing Platform 
      </Text>

      <View className="w-full max-w-md">
        <MenuButton text="Student Certificate/Record" onPress={() => router.replace("/Record")}/>
        <MenuButton text="Authentication and Verification" onPress={() => router.replace("/auth")}/>
        <MenuButton text="ID Replacement" onPress={() => router.replace("/id")}/>
        <MenuButton text="Evaluation of Transfer Credits" onPress={() => router.replace("/transfer")}/>
        <MenuButton text="Enrollment" onPress={() => router.replace("/enrol")}/>
        <MenuButton text="Adding/Dropping/Change of Schedule" onPress={() => router.replace("/add")}/>
        <MenuButton text="Re-admission" onPress={() => router.replace("/reAdd")}/>
        <MenuButton text="Change in Program" onPress={() => router.replace("/change")}/>
      </View>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </View>
  );
}
