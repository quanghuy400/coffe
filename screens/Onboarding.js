import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export default function Onboarding({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/Image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.overlay} />

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Fall in Love with{"\n"}Coffee in Blissful{"\n"}Delight!</Text>
          <Text style={styles.subtitle}>
            Welcome to our cozy coffee corner, where every cup is a delightful for you.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("MainTabs")}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 50,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    lineHeight: 44,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    color: "rgba(255,255,255,0.75)",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#C67C4E",
    borderRadius: 16,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});