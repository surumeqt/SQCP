import { TouchableOpacity, Text } from 'react-native';


export default function ProceedButton({ onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-[#F8D8AD] rounded-lg py-3 px-4 mt-4 mb-6 w-[90%] self-center">
      <Text className="text-[#312C51] text-xl text-center font-semibold">
        Proceed to Waiting Area
      </Text>
    </TouchableOpacity>

    
  );
}<ProceedButton onPress={() => {
    console.log("Proceed pressed");
    setStep(3);
  }} />
  

