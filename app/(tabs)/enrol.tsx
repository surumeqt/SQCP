import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import Marc from '@/components/marc'
import { useRouter } from "expo-router";

export default function Record() {
    const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-3xl font-bold text-center mb-6">
        Graduation & Diplomas
      </Text>    
<TouchableOpacity onPress={() => router.replace('/continuing')}>
<Marc text='Continuing Students'/>

</TouchableOpacity>

<TouchableOpacity onPress={() => router.replace('/continuing')}>
<Marc text='New Student'/>

</TouchableOpacity>

    </View>
  )

}