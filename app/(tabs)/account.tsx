import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

export default function account() {

  const logs = () => {
    console.log("Heeloo")
  }

  return (
    <View>
      <Text>account</Text>
      <TouchableOpacity onPress={logs} >
        hello
      </TouchableOpacity>
    </View>
  )
}