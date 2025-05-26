import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert, ActivityIndicator } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { getClerkErrorMessage } from '@/utils/clerkErrors';

export default function SignUp() {
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [pendingVerification, setPendingVerification] = useState(false);
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSignUpPress = async () => {
        if (!isLoaded) return;
        try {
            await signUp.create({ emailAddress, password });
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setPendingVerification(true);
        } catch (err: any) {
            const errorMessage = getClerkErrorMessage(err);
            Alert.alert('Sign-Up Error', errorMessage )
        }
    };

    const onVerifyPress = async () => {
        if (!isLoaded || loading) return;
        setLoading(true);
        try {
            const signUpAttempt = await signUp.attemptEmailAddressVerification({ code });

            if (signUpAttempt.status === "complete") {
                await setActive({ session: signUpAttempt.createdSessionId });
                router.replace("/(tabs)");
            } else {
                setLoading(false);
            }
        } catch (err) {
            Alert.alert("Error", "Verification Failed");
            setLoading(false);
        }
    };

  return (
      <View className="flex-1 items-center justify-center bg-[#312C51] px-6">
          {pendingVerification ? (
              <View className="w-80 p-6 bg-[#48426D] rounded-2xl shadow-lg">
                  <Text className="text-[#F0C38E] text-2xl font-semibold mb-4 text-center">Verify your email</Text>
                  <TextInput
                      className="border border-[#F0C38E] rounded-md p-3 mb-4 text-white"
                      value={code}
                      placeholder="Enter verification code"
                      placeholderTextColor="#F1AA9B"
                      onChangeText={setCode}
                  />
                  <TouchableOpacity
                      onPress={onVerifyPress}
                      disabled={loading}
                      className="bg-[#F0C38E] py-3 rounded-2xl items-center"
                  >
                      {loading ? <ActivityIndicator color="white" /> : <Text className="text-[#312C51] font-semibold text-lg">Verify</Text>}
                  </TouchableOpacity>
              </View>
          ) : (
              <View className="w-80 p-6 bg-[#48426D] rounded-2xl shadow-lg">
                  <Text className="text-[#F1AA9B] text-1xl font-light mb-2 text-center">Don't have an Account?</Text>
                  <Text className="text-[#F0C38E] text-2xl font-semibold mb-4 text-center">Sign Up</Text>
                  <TextInput
                      className="border border-[#F0C38E] rounded-md p-3 mb-2 text-white"
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
                      onPress={onSignUpPress}
                      className="bg-[#F0C38E] py-3 rounded-2xl items-center"
                  >
                      <Text className="text-[#312C51] font-semibold text-lg">Continue</Text>
                  </TouchableOpacity>
                  <View className="flex-row gap-2 mt-4 justify-center">
                      <Text className="text-[#F1AA9B]">Have an account?</Text>
                      <TouchableOpacity onPress={() => router.replace('/login')}>
                          <Text className="text-[#F0C38E]">Sign in</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          )}
      </View>
  );
}
