import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Marc from '@/components/marc';
import { useRouter } from "expo-router";

export default function reAdd() {
  const router = useRouter();

  return (
   <View className="flex-1 bg-[#312C51]">
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}>     
        <Marc text='Filing Application for Re-admission' variant="plain" />
        <Marc text='Secure GCForm Reg24 (Application for Re-admission) from Windows 2' />
        <Marc text='Fill-out the form completely' />
        <Marc text="Submit the form to the Office of the Registrar's for Verification" />
        <Marc text="Pay the corresponding fee at the Cashier (Windows 1 or 2)" />
        <Marc text="Seek the approval of the Program Coordinator and Dean of the College" />
        <Marc text="Accomplish the CLEARANCE(included in the form)" />
        <Marc text="Submit the accomplished form to the Office of the Registrar." />
      </ScrollView>

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
