import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

export default class App extends React.Component {
  state = {
    altura: 0,
    peso: 0,
    resultadoNumero: 0,
    resultadoTexto: ""
  };

  handleCalcular = () => {
    let imc = (this.state.peso * 10000) / this.state.altura ** 2;
    this.setState({
      resultadoNumero: imc.toFixed(2)
    });

    if (imc < 18.5) {
      this.setState({ resultadoTexto: "Abaixo do peso" });
    } else if (imc > 18.5 && imc < 25) {
      this.setState({ resultadoTexto: "Saudavel" });
    } else if (imc >= 25 && imc < 30) {
      this.setState({ resultadoTexto: "Acima do peso" });
    } else {
      this.setState({ resultadoTexto: "Obeso" });
    }
  };

  render() {
    return (
        <View style={styles.container}>
          <Text
            style={{
              color: "#6f42c1",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 30,
              fontSize: 15
            }}
          >
            Calculadora de IMC
          </Text>
          <View style={styles.intro}>
            <TextInput
              placeholder="Altura"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(altura) => {
                this.setState({ altura });
              }}
            />
            <TextInput
              placeholder="Peso"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(peso) => {
                this.setState({ peso });
              }}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleCalcular}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultadoNumero}</Text>
          <Text style={[styles.resultado, { fontSize: 35 }]}>
            {this.state.resultadoTexto}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color: "#6f42c1"
  },
  button: {
    backgroundColor: "#6f42c1"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#ffffff",
    fontWeight: "bold"
  },
  resultado: {
    alignSelf: "center",
    color: "#6f42c1",
    fontSize: 65,
    padding: 15
  }
});