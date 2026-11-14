import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Registro = {
  numero: number;
  hora: string;
};

// Formatear la hora actual en formato HH:MM:SS
function obtenerHoraActual(): string {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

export default function App() {
  // Estado del contador y del registro de clics en un solo objeto
  // para que las actualizaciones sean atómicas ante clics rápidos.
  const [estado, setEstado] = useState<{ likes: number; registros: Registro[] }>({
    likes: 0,
    registros: [],
  });
  const { likes, registros } = estado;

  const darLike = () => {
    setEstado((anterior) => {
      const nuevoTotal = anterior.likes + 1;
      return {
        likes: nuevoTotal,
        // El registro más reciente se inserta al inicio de la lista
        registros: [
          { numero: nuevoTotal, hora: obtenerHoraActual() },
          ...anterior.registros,
        ],
      };
    });
  };

  return (
    <View style={styles.pantalla} testID="pantalla">
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.tarjeta} testID="tarjeta">
          <Text style={styles.titulo}>Contador de Likes</Text>
          <Text style={styles.subtitulo}>
            React Native + Expo · sin DOM, con estado de React
          </Text>

          <View style={styles.contadorContenedor}>
            <Text style={styles.contador} testID="contador">
              {likes}
            </Text>
            <Text style={styles.contadorEtiqueta}>likes</Text>
          </View>

          <View style={styles.acciones}>
            <TouchableOpacity
              style={styles.botonLike}
              onPress={darLike}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel="Dar like"
              testID="btn-like"
            >
              <Text style={styles.botonLikeTexto}>Dar like</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registros}>
            <Text style={styles.registrosTitulo}>Registro de clics</Text>

            <View style={styles.tabla}>
              <View style={[styles.fila, styles.filaCabecera]}>
                <Text
                  style={[styles.celda, styles.celdaNumero, styles.celdaCabecera]}
                >
                  Nº Clic
                </Text>
                <Text
                  style={[styles.celda, styles.celdaHora, styles.celdaCabecera]}
                >
                  Hora
                </Text>
              </View>

              {registros.length === 0 ? (
                <Text style={styles.sinRegistros}>
                  Aún no hay clics registrados.
                </Text>
              ) : (
                registros.map((registro, indice) => (
                  <View
                    key={`clic-${registro.numero}`}
                    style={[
                      styles.fila,
                      indice === 0 && styles.filaReciente,
                    ]}
                    testID="registro-fila"
                  >
                    <Text
                      style={[
                        styles.celda,
                        styles.celdaNumero,
                        indice === 0 && styles.textoReciente,
                      ]}
                    >
                      {registro.numero}
                    </Text>
                    <Text
                      style={[
                        styles.celda,
                        styles.celdaHora,
                        indice === 0 && styles.textoReciente,
                      ]}
                    >
                      {registro.hora}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#e9ecef",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  tarjeta: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
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
    lineHeight: 20,
    textAlign: "center",
    color: "#6c757d",
  },
  contadorContenedor: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  contador: {
    fontSize: 64,
    fontWeight: "800",
    lineHeight: 72,
    color: "#0d6efd",
  },
  contadorEtiqueta: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#6c757d",
  },
  acciones: {
    flexDirection: "row",
    gap: 12,
  },
  botonLike: {
    flex: 1,
    backgroundColor: "#198754",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#198754",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  botonLikeTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  registros: {
    marginTop: 28,
  },
  registrosTitulo: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#343a40",
  },
  tabla: {
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#dee2e6",
  },
  filaCabecera: {
    backgroundColor: "#f8f9fa",
  },
  filaReciente: {
    backgroundColor: "#eef5ff",
  },
  celda: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#212529",
  },
  celdaCabecera: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#495057",
  },
  celdaNumero: {
    flex: 1,
    textAlign: "left",
  },
  celdaHora: {
    flex: 1,
    textAlign: "right",
    fontVariant: ["tabular-nums"],
  },
  textoReciente: {
    fontWeight: "700",
    color: "#0d6efd",
  },
  sinRegistros: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: "#adb5bd",
  },
});
