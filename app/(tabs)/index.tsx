import { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MenuButton from "@/components/MenuButton";
import Sidebar from "@/components/Sidebar";
import { EjectNotifModal } from "@/components/ConfirmationModal";
import { useBackExitHandler } from "@/hooks/useBackExitHandler";
import * as Notifications from 'expo-notifications';
import { sendPushNotification, registerForPushNotificationsAsync } from '@/utils/notifications';


export default function Index() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEjected, setIsEjected] = useState(false);
  const lastEjectionId = useRef<string | null>(null);
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>();
  useBackExitHandler();

  useEffect(() => {
    const ejectedId = params?.ejected?.toString();

    if (expoPushToken && ejectedId && lastEjectionId.current !== ejectedId) {
      sendPushNotification(expoPushToken);
      setIsEjected(true);
      lastEjectionId.current = ejectedId;
    }
  }, [params?.ejected, expoPushToken]);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) setExpoPushToken(token);
    });
  
    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification tapped:', response);
    });
  
    return () => subscription.remove();
    }, []);
  return (
    <View className="flex-1 bg-[#312C51] px-6 pt-12">
      <View className="absolute top-6 right-6">
        <TouchableOpacity onPress={() => setIsSidebarOpen(true)}>
          <Ionicons name="settings-outline" size={28} color="#F0C38E" />
        </TouchableOpacity>
      </View>

      <Text className="text-[#F1AA9B] text-3xl font-light text-center mb-6 mt-12">
        Welcome to Registrar Queuing App
      </Text>

      <View className="w-full max-w-md">
        <MenuButton
          text="Student Certificate/Record"
          onPress={() => router.replace("/Record")}
        />
        <MenuButton
          text="Authentication and Verification"
          onPress={() => router.replace("/auth")}
        />
        <MenuButton
          text="ID Replacement"
          onPress={() => router.replace("/id")}
        />
        <MenuButton
          text="Evaluation of Transfer Credits"
          onPress={() => router.replace("/transfer")}
        />
        <MenuButton
          text="Enrollment"
          onPress={() => router.replace("/enrol")}
        />
        <MenuButton
          text="Adding/Dropping/Change of Schedule"
          onPress={() => router.replace("/add")}
        />
        <MenuButton
          text="Re-admission"
          onPress={() => router.replace("/reAdd")}
        />
        <MenuButton
          text="Change in Program"
          onPress={() => router.replace("/change")}
        />
      </View>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <EjectNotifModal visible={isEjected} onClose={() => {setIsEjected(false); router.replace('/(tabs)')}} />
    </View>
  );
}
