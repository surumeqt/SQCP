import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Marc from '@/components/marc';
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Add() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Adding/Dropping/Change of Schedule";

  return (
    <View className="flex-1 bg-[#312C51]">
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}>
        <Marc text="Secure and fill-out Add/Drop form from Office of the Registrar (Rm.103)" />
        <Marc text="Fill-out the form completely" />
        <Marc text="Seek the approval of the assigned Faculty and College Dean respectively" />
        <Marc text="Submit the fully accomplished form to the Office of the Registrar (Rm. 103)" />
        <Marc text="Submit the instructor’s copy to the assigned faculty and keep the student’s copy for future reference." />
        <Marc text="Check GCES portal to check for updates" />
      </ScrollView>
      <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="bg-[#F8D8AD] text-[#312C51] font-semibold text-2xl text-center mt-2 mb-6 rounded-lg w-[90%] self-center p-3">
           <Text className="text-[#312C51] text-xl text-center font-semibold">
                Confirm
              </Text>
       </TouchableOpacity>
      
            <ConfirmationModal
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
              text={headerText}/>
    </View>
  );
}
