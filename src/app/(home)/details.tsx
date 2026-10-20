import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital ID Card</Text>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>S</Text>
      </View>
      <Text style={styles.text}>Name: Enter your ID</Text>
      <Text style={styles.text}>ID Number: Enter your ID</Text>
      <Text style={styles.text}>Course: Enter your ID</Text>
      <Text style={styles.text}>Year: Enter your ID</Text>
      <Text style={styles.text}>Email: Enter your ID</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});