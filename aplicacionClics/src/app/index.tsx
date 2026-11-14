import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.pantalla}>
      <View style={styles.tarjeta}>
        <Text style={styles.titulo}>Contador de Likes</Text>
        <Text style={styles.subtitulo}>React Native + Expo</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9ecef",
    padding: 20,
  },
  tarjeta: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    color: "#1c1c1c",
  },
  subtitulo: {
    marginTop: 8,
    fontSize: 14,
    textAlign: "center",
    color: "#6c757d",
  },
});
