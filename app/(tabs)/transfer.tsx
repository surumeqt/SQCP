import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Marc from '@/components/marc'
import { useRouter } from "expo-router";

export default function Record() {
    const router = useRouter();
  return (
    <View className="w-full max-w-md flex-1 bg-[#312C51] justify-center">
    
    <Marc text="Request for Evaluation of Transfer of Credits" variant="plain" />
    <Marc text='Secure a copy of prospectus from the Program Coordinator / Dean.'/>
    <Marc text='Submit copy of prospectus and Transcipt of Records/True Copy of Grades to the Office of the College Registrar for Evaluation'/>
    <Marc text='Recieve and keep the copy of the prospectus with Registrar signature for future reference'/>
    <Marc text='Request to drop courses with equivalent credits online using the GCES portal'/>

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