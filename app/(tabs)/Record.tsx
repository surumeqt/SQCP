import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Marc from '@/components/marc'
import { useRouter } from "expo-router";

export default function Record() {
    const router = useRouter();
  return (
    
<View className="flex-1 bg-[#312C51]">
          <ScrollView 
            contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
            showsVerticalScrollIndicator={false}
          >    
    <Marc text=" Filing of Application for Student Certificate/Records" variant="plain" />
    <Marc text='1. Secure GCForm_1 (Student Request Form) from Windows 2'/>
    <Marc text='2. Fill out the form completely'/>
    <Marc text='3. Submit the form to the office of the Registrar for Verification'/>
    <Marc text='4. Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
    <Marc text='5. Submit the form and official reciept to the Office of the Registrar(Clearance must be accomplished in requesting certqain record types.)'/>
    <Marc text='6. A Claim Slip will be issued with the Date of Release'/>
              </ScrollView>
    
    <TouchableOpacity
            onPress={() => router.replace('/(tabs)/waiting')}
            className="bg-[#F8D8AD] text-[#312C51] font-semibold text-2xl text-center mt-2 mb-6 rounded-lg w-[90%] self-center p-3"
          >
            <Text className="text-[#312C51] text-xl text-center font-semibold">
              Confirm
            </Text>
          </TouchableOpacity>
    </View>
  )

}