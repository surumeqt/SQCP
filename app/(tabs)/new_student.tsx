import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import StepsButton from '@/components/StepsButton';
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function NewStudent() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Continuing Students";

  return (
   <View className="flex-1 bg-[#312C51]">
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      >     
      <StepsButton text="Submit complete enrollment requirements to the IGS Office (Rm.105)" />
      <StepsButton text='Fill-out Student Information in the Enrollment Evaluation Form' />
      <StepsButton text='Review and affix signature in the Enrollment Evaluation Form' />
      <StepsButton text="Submit Enrollment Evaluation Form to the Registrar's Office for Encoding" />
      <StepsButton text="Submit E-Form and pay necessary fees at the Cashier (Windows 1 or 2)" />
      <StepsButton text="Received the Official Reciept(OR) and E-Form" />
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
