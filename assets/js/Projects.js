import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, ScrollView } from "react-native";



const projects = [
    {
        title: "On Language",
        description:
        "Web Project developed with Node.js, HTML, CSS and Javascript to establish vocabulary in 6 languages through games.",
        image: require("../images/onlanguages_options.png"),
        github_url:
        "https://github.com/guilherme-pg/onLanguage.git",
    },
    {
        title: "Analysis of electoral performances in Minas Gerais (2010-2022)",
        description:
        "Project designed in R to analyze the Performance of candidates for Governor and President in the State of Minas Gerais between 2010 and 2022.",
        image: require("../images/scatter_2022_election_brazilian_MG_correlation_president_x_governador_1_turn_v2.jpg"),
        github_url:
        "https://github.com/guilherme-pg/elections_analytics_-_minas_gerais.git",
    },
    {
        title: "Image Comparator",
        description:
        "Project created with Python and Flask that compares two images and returns metrics and statistics that evaluate the level of similarity between them.",
        image: require("../images/feature_em_matched_image.jpg"),
        github_url: "https://github.com/guilherme-pg/image-comparator.git",
    }
];



const Projects = () => {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Projects</Text>

                {projects.map((project, index) => (
                    <View key={index} style={styles.project_container}>

                        <Image source={project.image} style={styles.project_image} />

                        <View style={styles.container_text}>
                            <Text style={styles.project_title}>{project.title}</Text>
                            <Text style={styles.project_description}>{project.description}</Text>
                            
                            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(project.github_url)} >
                                <Text style={styles.button_text}>Check on GitHub</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};



const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#ECE9E1"
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    paddingBottom: 120
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  project_container: {
    width: "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    alignItems: "center",
    marginBottom: 40,
    paddingBottom: 10
  },
  project_image: {
    width: "100%",
    height: 300,
    marginBottom: 15
  },
  container_text: {
    padding: 10
  },
  project_title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center"
  },
  project_description: {
    fontSize: 16,
    marginBottom: 15,
    color: "#304145",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#304145",
    padding: 10
  },
  button_text: {
    color: "#ECE9E1",
    fontSize: 16,
    textAlign: "center"
  }
});



export default Projects;
