import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Marc from '@/components/marc';
import { useRouter } from 'expo-router';

export default function Record() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#312C51]">
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      >
        <Marc text="Filing of Request for Adding/Dropping/Change of Schedule" variant="plain" />
        <Marc text="Secure and fill-out Add/Drop form from Office of the Registrar (Rm.103)" />
        <Marc text="Fill-out the form completely" />
        <Marc text="Seek the approval of the assigned Faculty and College Dean respectively" />
        <Marc text="Submit the fully accomplished form to the Office of the Registrar (Rm. 103)" />
        <Marc text="Submit the instructor’s copy to the assigned faculty and keep the student’s copy for future reference." />
        <Marc text="Check GCES portal to check for updates" />
      </ScrollView>

      {/* Confirm button fixed at the bottom */}
      <TouchableOpacity
        onPress={() => router.replace('/(tabs)/waiting')}
        className="bg-[#F8D8AD] text-[#312C51] font-semibold text-2xl text-center mt-2 mb-6 rounded-lg w-[90%] self-center p-3"
      >
        <Text className="text-[#312C51] text-xl text-center font-semibold">
          Confirm
        </Text>
      </TouchableOpacity>
    </View>
  );
}
