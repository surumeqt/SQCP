import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import StepsButton from '@/components/StepsButton';
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function reAdd() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Re-admission";
  
  return (
   <View className="flex-1 bg-[#312C51]">
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}>     
        <StepsButton text='Secure GCForm Reg24 (Application for Re-admission) from Windows 2' />
        <StepsButton text='Fill-out the form completely' />
        <StepsButton text="Submit the form to the Office of the Registrar's for Verification" />
        <StepsButton text="Pay the corresponding fee at the Cashier (Windows 1 or 2)" />
        <StepsButton text="Seek the approval of the Program Coordinator and Dean of the College" />
        <StepsButton text="Accomplish the CLEARANCE(included in the form)" />
        <StepsButton text="Submit the accomplished form to the Office of the Registrar." />
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
