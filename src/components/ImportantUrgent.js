import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const ImportantUrgent = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load data from AsyncStorage on component mount
  useEffect(() => {
    retrieveData();
  }, []);

  // Function to retrieve data from AsyncStorage
  const retrieveData = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@importantUrgent");
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
    }
  };

  // Function to save data to AsyncStorage
  const saveData = async (data) => {
    try {
      await AsyncStorage.setItem("@importantUrgent", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving data to AsyncStorage:", error);
    }
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTaskItem = { id: Date.now(), text: newTask, completed: false };
      setTasks([...tasks, newTaskItem]);
      saveData([...tasks, newTaskItem]); // Save data to AsyncStorage
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveData(updatedTasks); // Save data to AsyncStorage
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    saveData(updatedTasks); // Save data to AsyncStorage
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <View style={styles.taskTextContainer}>
        <TouchableOpacity onPress={() => handleToggleComplete(item.id)}>
          <Text
            style={[styles.taskText, item.completed && styles.completedTask]}
          >
            {item.text}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => handleDeleteTask(item.id)}
      >
        <Text style={styles.deleteButton}>
          {<MaterialIcons name="delete" size={24} color="#008080" />}
        </Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#000000" }}>
      <Image
        source={require("../../assets/green2.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.container}>
        <Text style={styles.subheading}>IMPORTANT URGENT</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Write here..."
            value={newTask}
            onChangeText={setNewTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Text style={styles.addButtonText}>
              {<FontAwesome name="plus" size={24} color="#008080" />}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "#008080",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#CED4DA",
    borderRadius: 4,
    padding: 10,
    color: "#CED4DA",
  },
  addButton: {
    backgroundColor: "#000000",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addbuttonText: {
    color: "#008080",
    fontWeight: "bold",
  },
  flatList: {
    flex: 1,
  },
  taskContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: 18,
    color: "#CED4DA",
  },
  completedTask: {
    textDecorationLine: "line-through",
  },
  deleteButton: {
    color: "#CED4DA",
  },
  subheading: {
    color: "#CED4DA",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    paddingTop: 20,
    marginTop: -30,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});

export default ImportantUrgent;
