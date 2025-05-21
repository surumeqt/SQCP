import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import StepsButton from '@/components/StepsButton'
import { useRouter } from "expo-router";

export default function Enrollment() {
    const router = useRouter();
  return (
    <View className="flex-1 justify-center items-center bg-[#312C51] px-6">
      <Text className="text-[#F1AA9B] text-3xl font-bold text-center mb-6">
        Enrollment
      </Text>
      <TouchableOpacity onPress={() => router.replace('/continuing')}>
        <StepsButton text='Continuing Students'/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace('/new_student')}>
        <StepsButton text='New Student'/>
      </TouchableOpacity>
    </View>
  )

}