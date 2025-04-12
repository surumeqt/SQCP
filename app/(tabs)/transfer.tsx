import { View, Text, TouchableOpacity} from 'react-native'
import Marc from '@/components/marc'
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Transfer() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Evaluation of Transfer Credits";

  return (
    <View className="w-full max-w-md flex-1 bg-[#312C51] justify-center">
    
    <Marc text='Secure a copy of prospectus from the Program Coordinator / Dean.'/>
    <Marc text='Submit copy of prospectus and Transcipt of Records/True Copy of Grades to the Office of the College Registrar for Evaluation'/>
    <Marc text='Recieve and keep the copy of the prospectus with Registrar signature for future reference'/>
    <Marc text='Request to drop courses with equivalent credits online using the GCES portal'/>

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