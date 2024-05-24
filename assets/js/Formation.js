import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Formation = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formation</Text>
            
                <View style={styles.container_formation}>
                
                    <Text style={styles.title_formation}>Analysis and Systems Development</Text>
                    <Text style={styles.information}>Faculdade SENAC | 2023-</Text>

                    <Text style={styles.title_formation}>Law Graduation</Text>
                    <Text style={styles.information}>UNICAP | 2009-2013</Text>
                </View>
            


            <Text style={styles.title}>Complementary Training</Text>
            
                <View style={styles.container_formation}>
                    <Text style={styles.title_formation}>Curso FAST – Formação Acelerada em Soluções TechDesign </Text>
                    <Text style={styles.information}>
                        CESAR School | 72h
                    </Text>

                    <Text style={styles.title_formation}>SQL – MySQL for Data Analytics and Business Intelligence</Text>
                    <Text style={styles.information}>
                        Udemy | 10h
                    </Text>

                    <Text style={styles.title_formation}>Microsoft Power BI Para Business Intelligence e Data Science</Text>
                    <Text style={styles.information}>
                        Data Science Academy | 72h
                    </Text>

                    <Text style={styles.title_formation}>Python Fundamentos Para Análise de Dados 3.0</Text>
                    <Text style={styles.information}>
                        Data Science Academy | 60h
                    </Text>

                    <Text style={styles.title_formation}>Learn ggplot2 in R for Data Visualization</Text>
                    <Text style={styles.information}>
                        Udemy | 10.5h
                    </Text>
                </View>
        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE9E1",
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3D3D3D",
    marginBottom: 20,
    textAlign: "center"
  },
  container_formation: {
    padding: 10,
    marginBottom: 30,
    elevation: 3,
    flex: 1,
    justifyContent: "center"
  },
  title_formation: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#304145",
    marginBottom: 5
  },
  information: {
    fontSize: 16,
    lineHeight: 22,
    color: "#304145",
    paddingBottom: 25
  }
});



export default Formation;
