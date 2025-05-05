import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Marc from '@/components/marc';
import { useState } from 'react';
import ConfirmationModal from '@/components/ConfirmationModal';
import ProceedButton from '@/components/ProceedButton';

export default function Record() {
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(1);
  const headerText = "Student Certificate/Record";

  return (
    <View className="flex-1 bg-[#312C51]">

      <Text className="text-[#F1AA9B] text-xl font-semibold text-center mt-6 mb-4">
        {headerText}
      </Text>

      <ScrollView 
        contentContainerStyle={{ paddingVertical: 12, paddingHorizontal: 8 }}
        showsVerticalScrollIndicator={false}>

        {/* Always show Step 1–3 */}
        <Marc text='1. Secure GCForm_1 (Student Request Form) from Windows 2'/>
        <Marc text='2. Fill out the form completely'/>
        <Marc text='3. Submit the form to the office of the Registrar for Verification'/>

        {/* Show Step 4–6 only if step >= 2 */}
        {step >= 2 && (
          <>
            <Marc text='4. Pay the corresponding fee at the Cashier (Windows 1 or 2)'/>
            <Marc text='5. Submit the form and official receipt to the Office of the Registrar (Clearance must be accomplished in requesting certain record types.)'/>
            <Marc text='6. A Claim Slip will be issued with the Date of Release'/>
          </>
        )}
      </ScrollView>

      {/* Buttons based on current step */}
      {step === 1 && (
        <TouchableOpacity
          onPress={() => setStep(2)}
          className="bg-[#A2C4EC] rounded-lg py-3 px-4 mt-4 mb-6 self-center w-[90%]">
          <Text className="text-[#312C51] text-xl text-center font-semibold">
            Show Next Steps
          </Text>
        </TouchableOpacity>
      )}

{step === 2 && (
  <View className="w-full items-center">
    <TouchableOpacity
      onPress={() => setStep(1)}
      className="bg-[#F1AA9B] rounded-lg py-3 px-4 mt-4 w-[90%]">
      <Text className="text-white text-xl text-center font-semibold">
        Back to Previous Steps
      </Text>
    </TouchableOpacity>

    {/* Use the ProceedButton and pass setStep(3) */}
    <ProceedButton onPress={() => setStep(3)} />
  </View>
)}



      {step === 3 && (
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          className="bg-[#F8D8AD] rounded-lg py-3 px-4 mt-4 mb-6 self-center w-[90%]">
          <Text className="text-[#312C51] text-xl text-center font-semibold">
            Confirm
          </Text>
        </TouchableOpacity>
      )}

      <ConfirmationModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          if (step === 1) {
              setStep(1);
          }          
        }}
        text={headerText}
      />
    </View>
  );
}
