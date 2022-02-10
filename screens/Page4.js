import { View, Text,StyleSheet } from 'react-native';
import React from 'react';

export default function Page1() {
  return (
    <View style = {styles.container}>
      <Text>Hi This is Page4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems : "center",
        flex:1, 
        justifyContent:"center",
      },
});
