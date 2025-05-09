import { View, Text, TouchableOpacity} from 'react-native'
import Marc from '@/components/marc'
import ConfirmationModal from '@/components/ConfirmationModal';
import { useState } from 'react';

export default function Transfer() {
  const [modalVisible, setModalVisible] = useState(false);
  const headerText = "Student Certification/Records";

  return (
    <View className="w-full max-w-md flex-1 bg-[#312C51] justify-center">
    
    <Marc text='Secure GCForm_1 (Student Request Form) from Windows 2'/>
    <Marc text='Fill-out the form completely'/>
    <Marc text='Submit the form to the Office of the Registrar for verification'/>
    <Marc text='Pay the corresponding fee at the Cashier '/>
    <Marc text='Submit the form and official reciept to the Office of the Registrar. (Clearance must be accomplished
                in requesting certain record types.) '/>
    <Marc text='A Claim slip will be issued with the Date of the Release. '/>


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