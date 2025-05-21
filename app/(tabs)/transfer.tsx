import { View, Text, TouchableOpacity, ScrollView} from 'react-native'
import StepsButton from '@/components/StepsButton'
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Transfer() {
    const [modalVisible, setModalVisible] = useState(false);
    const headerText = "Evaluation of Transfer Credits";
  return (
    <View className="flex-1 bg-[#312C51]">
        <Text className="text-[#F1AA9B] text-xl font-semibold text-center mt-6 mb-4">
          {headerText}
        </Text>
          <ScrollView
            contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
            showsVerticalScrollIndicator={false}>
          <StepsButton text='Secure a copy of prospectus from the Program Coordinator / Dean.'/>
          <StepsButton text='Submit copy of prospectus and Transcipt of Records/True Copy of Grades to the Office of the College Registrar for Evaluation'/>
          <StepsButton text='Recieve and keep the copy of the prospectus with Registrar signature for future reference'/>
          <StepsButton text='Request to drop courses with equivalent credits online using the GCES portal'/>
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