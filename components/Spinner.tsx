import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Spinner = () => (
  <View style={styles.spinnerContainer}>
    <ActivityIndicator size={100} style={styles.spinner} color="green" />
  </View>
);

const styles = StyleSheet.create({
  spinnerContainer: {
    justifyContent: "center",
    flex: 1,
    display: 'flex'
  },
  spinner: {
      margin: 'auto'
  }
});

export default Spinner;
