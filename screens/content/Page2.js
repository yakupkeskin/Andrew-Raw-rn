import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Page2() {
  return (
    <View style ={styles.container} >
      <Text>Hi This is Page 2</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});