import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AboutMe from "./assets/js/AboutMe";
import Formation from "./assets/js/Formation";
import Projects from "./assets/js/Projects";
import Home from "./assets/js/Home";

const App = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [currentPage, setcurrentPage] = useState("Home");

  const toggleMenu = () => {
    setopenMenu(!openMenu);
  };

  const navigateTo = (page) => {
    setcurrentPage(page);
    setopenMenu(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "AboutMe":
        return <AboutMe />;
      case "Formation":
        return <Formation />;
      case "Projects":
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Portfolio</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <MaterialCommunityIcons name="menu" size={30} color="lightgrey" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {openMenu && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Home")}
          >
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("AboutMe")}
          >
            <Text style={styles.menuItemText}>AboutMe</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Formation")}
          >
            <Text style={styles.menuItemText}>Formation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigateTo("Projects")}
          >
            <Text style={styles.menuItemText}>Projects</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {renderPage()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE9E1",
    paddingTop: 27,
  },
  header: {
    backgroundColor: "#304145",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    shadowColor: "#000",
    shadowRadius: 5
  },
  title: {
    color: "#ECE9E1",
    fontSize: 24,
    fontWeight: "bold"
  },
  menuIcon: {
    color: "#ECE9E1",
    padding: 10,
  },
  menu: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    shadowColor: "#000",
    shadowRadius: 5,
    elevation: 3,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    padding: 10
  },
  menuItemText: {
    fontSize: 16,
    color: "#304145",
    textAlign: "right",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  }
});

export default App;
