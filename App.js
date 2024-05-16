import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import exercises from "./assets/data/exercises.json";
import Logo from "./components/Logo/Logo";

export default function App() {
  const [fontsLoaded] = useFonts({
    uberBold: require("./assets/fonts/UberMoveBold.otf"),
    uberMedium: require("./assets/fonts/UberMoveMedium.otf"),
  });

  const exercise = exercises[0];
  console.log(exercise);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Get the best gun shop prices near your location
        </Text>
        <Text style={styles.subtitle}>
          Support local sellers, save money and unlock more opportunities to
          earn.
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    paddingVertical: 60,
    paddingHorizontal: 16,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 60,
  },
  titleContainer: {
    marginBottom: 32,
  },
  title: {
    fontSize: 30,
    fontFamily: "uberBold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: "#5A5A5A",
  },
});
