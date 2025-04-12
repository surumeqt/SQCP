import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from '@clerk/clerk-expo';

export default function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { signOut, isSignedIn} = useAuth();
    const translateX = useRef(new Animated.Value(300)).current;
    useEffect(() => {
        Animated.timing(translateX, {
        toValue: isOpen ? 0 : 300,
        duration: 300,
        useNativeDriver: true,
        }).start();
    }, [isOpen]);

    const logout = async () => {

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
            <TouchableOpacity className="mb-4" onPress={() => router.replace("/privacy")}>
            <Text className="text-white text-lg">Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity className="mb-4">
            <Text className="text-white text-lg">Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={logout}>
            <Text className="text-red-400 text-lg">Logout</Text>
            </TouchableOpacity>
        </Animated.View>
        </View>
    );
}
