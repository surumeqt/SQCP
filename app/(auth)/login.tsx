import { useSignIn } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { getClerkErrorMessage } from '@/utils/clerkErrors';

export default function Login() {
  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()

  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return

    try {
      setLoading(true)
      const signInAttempt = await signIn.create({ identifier: emailAddress, password })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(tabs)')
      }
    } catch (err: any) {
      const errorMessage = getClerkErrorMessage(err);
      Alert.alert('Login Error', errorMessage )
    } finally {
      setLoading(false)
    }
  }, [isLoaded, emailAddress, password])

  return (
    <View className="flex-1 items-center justify-center bg-[#312C51] px-6">
      <View className="w-80 p-6 bg-[#48426D] rounded-2xl shadow-lg">
        <Text className="text-[#F0C38E] text-2xl font-semibold mb-4 text-center">Login</Text>
        <TextInput
          className="border border-[#F0C38E] rounded-md p-3 mb-2 text-white"
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Enter email"
          placeholderTextColor="#F1AA9B"
          onChangeText={setEmailAddress}
        />
        <View className="relative mb-4">
            <TextInput
                className="border border-[#F0C38E] rounded-md p-3 mb-4 text-white"
                value={password}
                placeholder="Password"
                placeholderTextColor="#F1AA9B"
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                className="absolute right-3 top-2.5"
                onPress={() => setShowPassword(!showPassword)}
            >
                <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color="#F1AA9B"
                />
            </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onSignInPress}
          disabled={loading}
          className="bg-[#F0C38E] py-3 rounded-2xl items-center"
        >
          {loading ? <ActivityIndicator color="white" /> : <Text className="text-[#312C51] font-semibold text-lg">Login</Text>}
        </TouchableOpacity>
        <View className="flex-row gap-2 mt-4 justify-center">
          <Text className="text-[#F1AA9B]">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.replace("/signUp")}>
            <Text className="text-[#F0C38E]">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
