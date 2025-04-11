import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Marc from '@/components/marc';
import { useRouter } from "expo-router";

export default function Change() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#312C51] justify-center p-4">
      <Marc text="Filing of Application for Change in Program" variant="plain" />
      <Marc text='Secure GCForm SR08 (Application for Re-admission) from Window 2' />
      <Marc text='Fill-out the form completely' />
      <Marc text='Submit the form to the Office of the Registrar for verification' />
      <Marc text='Seek the approval of the Program Coordinator for verification' />
      <Marc text='Submit the accomplished form to the Office of the Registrar' />

      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/waiting')}
        className="bg-[#F8D8AD] text-[#312C51] font-semibold text-2xl text-center mt-4 mb-6 rounded-lg w-[90%] self-center p-3"
      >
        <Text className="text-[#312C51] text-xl text-center font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}
