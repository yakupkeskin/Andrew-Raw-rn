import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../redux/actions/counterActions";
import { useEffect, useState } from "react";
import axios from "axios";
import url from "../../url";
export default function Page4({ navigation }) {

  function logout() {
    //dispatch(reset());
    navigation.navigate("LoginNavigator");
  }


  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
