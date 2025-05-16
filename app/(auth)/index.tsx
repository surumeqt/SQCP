import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  Easing 
} from "react-native-reanimated";

export default function Index() {
  // Animation Values
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(20);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 1000, easing: Easing.out(Easing.exp) });
    translateY.value = withSpring(0);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Animated.View style={animatedStyle}>
        <Text className="text-[#F0C38E] text-3xl font-bold text-center">
          Welcome to GCQUEUING PLATFORM
        </Text>
        <Text className="text-[#F1AA9B] text-lg text-center mt-2">
          Manage student queues efficiently and hassle-free.
        </Text>
      </Animated.View>

      <Animated.View style={[animatedStyle, { marginTop: 30 }]}>
        <TouchableOpacity
          onPress={() => router.replace("/login")}
          className="px-6 py-3 bg-[#48426D] rounded-full shadow-lg active:scale-95"
          activeOpacity={0.8}
        >
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
