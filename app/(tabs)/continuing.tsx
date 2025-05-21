import { View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Marc from '@/components/StepsButton';
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Continuing() {
const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Continuing Students";

  return (
   <View className="flex-1 bg-[#312C51]">
      <Text className="text-[#F1AA9B] text-xl font-semibold text-center mt-6 mb-4">
          {headerText}
        </Text>
      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}
      >     
      <Marc text="Submit accomplished clearance to the Registrar's Office and claim last Term Grade" />
      <Marc text='Present term grades to IGS Office(Rm.105) and fill out Enrolment Evaluation Form' />
      <Marc text='Review and affix signature in the Enrollment Evaluation Form' />
      <Marc text="Submit Enrollment Evaluation Form to the Registrar's Office for Encoding" />
      <Marc text="Submit E-Form and pay necessary fees at the Cashier (Windows 1 or 2)" />
      <Marc text="Received the Official Reciept(OR) and E-Form" />
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
