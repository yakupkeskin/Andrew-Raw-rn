import { View, Text, StyleSheet,Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


export default function Home({navigation}) {
  return (
    <View style = {styles.container}>
      <Text>Hi This is Home </Text>
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
