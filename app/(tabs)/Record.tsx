import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import StepsButton from '@/components/StepsButton'
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Records() {
    const [modalVisible, setModalVisible] = useState(false);
    const headerText = "Student Certification/Records";
  return (
    <View className="flex-1 bg-[#312C51]">
        <Text className="text-[#F1AA9B] text-xl font-semibold text-center mt-6 mb-4">
          {headerText}
        </Text>
          <ScrollView
            contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
            showsVerticalScrollIndicator={false}>
            <StepsButton text='Secure GCform(Request form) from Windows 2'/>
            <StepsButton text='Fill-out the form completely'/>
            <StepsButton text='Submit the form to the Office of the Registrar for verification'/>
            <StepsButton text='Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
            <StepsButton text='Submit the form and official reciept to the Office of the Registrar. (Clearance must be accomplished
                in requesting certain record types.)'/>
            <StepsButton text='A Claim Slip will be issued with the Date of Release'/>
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
  )
}