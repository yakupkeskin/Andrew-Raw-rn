import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Page1() {
  return (
    <View style = {styles.container}>
      <Text>Hi This is Page 1</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});