import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import Marc from '@/components/marc'
import { useState } from 'react';
import ConfirmationModal from '@/components/ConfirmationModal';

export default function Record() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Student Certificate/Record";
  
  return (
    <View className="flex-1 bg-[#312C51]">

      <Text className="text-[#F1AA9B] text-xl font-semibold text-center mt-6 mb-4">
        {headerText}
      </Text>

      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}>
        <Marc text='1. Secure GCForm_1 (Student Request Form) from Windows 2'/>
        <Marc text='2. Fill out the form completely'/>
        <Marc text='3. Submit the form to the office of the Registrar for Verification'/>
        <Marc text='4. Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
        <Marc text='5. Submit the form and official reciept to the Office of the Registrar(Clearance must be accomplished in requesting certqain record types.)'/>
        <Marc text='6. A Claim Slip will be issued with the Date of Release'/>
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