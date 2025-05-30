import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from '@clerk/clerk-expo';
import { LogoutModal } from "@/components/ConfirmationModal";

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { signOut, isSignedIn} = useAuth();
    const [logoutModalVisible, setLogoutModalVisible] = useState(false);
    const translateX = useRef(new Animated.Value(300)).current;
    useEffect(() => {
        Animated.timing(translateX, {
        toValue: isOpen ? 0 : 300,
        duration: 300,
        useNativeDriver: true,
        }).start();
    }, [isOpen]);

    const Logout = async () => {
        await signOut();
        console.log("✅ User Successfully Signed-Out")
        if(!isSignedIn){
        router.replace('/(auth)/login')
        }
    }
    return (
        <View className="absolute inset-0">
        {isOpen && (
            <TouchableOpacity className="absolute inset-0 bg-black/50" onPress={onClose} />
        )}

        <Animated.View
            style={{ transform: [{ translateX }] }}
            className="absolute right-0 top-0 h-full w-60 bg-[#48426D] p-6 shadow-lg"
        >
            <TouchableOpacity onPress={onClose} className="self-end">
            <Ionicons name="close" size={28} color="#F0C38E" />
            </TouchableOpacity>

            <Text className="text-[#F0C38E] text-xl font-semibold mt-6 mb-4">Settings</Text>
            <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
            <Text className="text-red-400 text-lg">Logout</Text>
            </TouchableOpacity>
            <LogoutModal visible={logoutModalVisible} onClose={() => setLogoutModalVisible(false)} handleLogout={Logout} />
        </Animated.View>
        </View>
    );
}
