import { Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Marc({
  text,
  variant = "default",
}: {
  text: string;
  variant?: "default" | "plain";
}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const baseClass = variant === "plain"
    ? "my-4 w-[90%] mx-auto p-2 items-center justify-center"
    : "bg-[#F0C38E] rounded-2xl my-4 w-[90%] mx-auto p-2 items-center justify-center";

  const textClass = variant === "plain"
    ? "text-[#F8D8AD] font-bold text-xl text-center p-2"
    : "text-[#312C51] font-semibold text-lg text-center p-2";

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
      className={baseClass}
    >
      <Text className={textClass}>
        {text}
      </Text>
    </Animated.View>
  );
}
