import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Marc from '@/components/marc'
import { useRouter } from "expo-router";

export default function Authentication() {
    const router = useRouter();
  return (
    <View className="flex-1 bg-[#312C51]">
          <ScrollView 
            contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
            showsVerticalScrollIndicator={false}>
            <Marc text="Filing of Application for Certificate of Authentication and Verification." variant="plain"/>
            <Marc text='Secure GCform(Request form) from Windows 2'/>
            <Marc text='Fill-out the form and check CAV (Certification of Authentication and verification'/>
            <Marc text='Submit the form to the Office of the Registrar for verification'/>
            <Marc text='Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
            <Marc text='Submit the form and official reciept to the Office of the Registrar together with the following:
                  1.Photocopy of Official Transcript of Records.
                  2.Photocopy of Diplopma
                  3.Photocopy of RLE Summary (for BSN)'/>
            <Marc text='A Claim Slip will be issued with the Date of Release'/>
          </ScrollView>

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