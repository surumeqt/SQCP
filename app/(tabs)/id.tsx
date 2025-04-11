import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Marc from '@/components/marc'
import { useRouter } from "expo-router";

export default function ID() {
    const router = useRouter();
  return (
    <View className="w-full max-w-md flex-1 bg-[#312C51]">
        <Marc text="Process for ID Replacement" variant="plain" />
        <Marc text='Secure GCform(Request form) from Windows 2'/>
        <Marc text='In case of lost ID Card:'/>
        <Marc text='1. Secure a Notarized Affidavit of Loss from an Attorney’s Office'/>
        <Marc text='2. Seek the approval of the head of office of the Student Discipline (Rm.122)'/>
        <Marc text='Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
        <Marc text='Proceed to Rm.315 for ID Card Printing'/>
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/waiting')}
        className="bg-[#F8D8AD] text-[#312C51] font-semibold text-2xl text-center mt-2 mb-6 rounded-lg w-[90%] self-center p-3">
        <Text className="text-[#312C51] text-xl text-center font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  )

}