import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel: true,
      headerShown: false,
      tabBarStyle: { display: "none" },
      }}>
    </Tabs>
  )
}