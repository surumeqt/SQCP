import { View, Text} from 'react-native'
import React from 'react'

export default function Privacy() {
   
    return (
    <View className="flex-1 bg-[#312C51] items-center ">
      <Text className='text-[#F1AA9B] font-bold text-3xl '>Privacy Policy</Text>
      <Text className='text-white font-semibold mt-4'>
             We care about your privacy. 
             This policy explains how we collect, use, and protect your personal information
             when you use our queueing system.
     </Text>
     <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>1.What we Collect:</Text>
     <Text className='text-white font-semibold text-left w-full mt-2 '>
        {'\u2022'} Name{"\n"}
        {'\u2022'} Contact Information{"\n"}
        {'\u2022'} Queue Details{"\n"}
        {'\u2022'} Location{"\n"}
        {'\u2022'} Device Information
     </Text>
     <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>2.How we use your Information:</Text>
     <Text className='text-white font-semibold text-left w-full mt-2'>
        {'\u2022'} Register you in a queue{"\n"}
        {'\u2022'} Notify you when it's you turn{"\n"}
        {'\u2022'} Improve the speed and accuracy of our service{"\n"}
        {'\u2022'} Send you updates (if you allow it){"\n"}
        We do not sell your data to third parties.
    </Text>
    <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>3.How we Protect your Data</Text>
         <Text className="text-white font-semibold text-left w-full mt-2 ">
                  We use encryption, secure servers, and access controls to keep your data safe. 
                Only authorized staff can access sensitive information.
             </Text>
    <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>4.How we use your Information:</Text>
        <Text className='text-white font-semibold text-left w-full mt-2'>
        {'\u2022'} Service providers (to send you SMS or email){"\n"}
        {'\u2022'} Staff or admins managing the queues{"\n"}
        We only share what’s necessary and nothing more.
         </Text>
    <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>5.How we Protect your Data</Text>
         <Text className="text-white font-semibold text-left w-full mt-2 ">
         We keep your data only as long as needed to run the system and follow legal requirements. 
         You can request deletion at any time.
        </Text>        
        <Text className='text-[#F1AA9B] text-semibold text-left w-full mt-4 text-2xl'>6.Contact Us:</Text>
            <Text className='text-white font-semibold text-left w-full mt-2'>
        {'\u2022'} Email:{"\n"}
        {'\u2022'} Phone no:{"\n"}
         </Text>


    </View>
    
  )
}