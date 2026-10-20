import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ClockScreen() {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Clock</Text>
      <Text style={styles.timeText}>{time}</Text>
      <Text style={styles.subtext}>Current local time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
  },
});