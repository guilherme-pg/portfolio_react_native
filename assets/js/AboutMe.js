// SobreRestaurante.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";



const AboutMe = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Me for myself</Text>
            <Text style={styles.information}>
                Although I started my professional career as a lawyer, I found in Data Science a new perspective that aligned perfectly with my programming hobby. This career change allowed me to see an even greater universe of possibilities, combining my analytical skills with my passion for data and technology.
            </Text>

            <Text style={styles.information}>
                By diving into the field of Data Science, I developed a deep understanding of statistical techniques, machine learning, and big data analysis. My legal training provided me with a distinct and detailed vision, which I apply in solving complex problems and interpreting data. I'm excited to apply this diverse set of skills to new challenges and innovative projects.
            </Text>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECE9E1",
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3D3D3D",
    textAlign: "center"
  },
  information: {
    fontSize: 18,
    lineHeight: 26,
    marginVertical: 10,
    textAlign: "justify",
    color: "#304145",
    paddingHorizontal: 20,
    backgroundColor: "#ECE9E1",
    padding: 10,
    shadowColor: "#000",
    elevation: 3
  }
});



export default AboutMe;
