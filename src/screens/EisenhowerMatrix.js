import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Trash from "../components/Trash";
import ImportantUrgent from "../components/ImportantUrgent";
import ImportantNotUrgent from "../components/ImportantNotUrgent";
import NotImportantUrgent from "../components/NotImportantUrgent";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

const Tab = createMaterialTopTabNavigator();

export default function EisenhowerMatrix() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabActiveTintColor: "#000000",
        tabInactiveTintColor: "#000000",
        tabActiveBackgroundColor: "#B0D9B1",
        tabInactiveBackgroundColor: "#000000",
        headerTintColor: "#000000",
        tabStyle: {
          backgroundColor: "#B0D9B1",
        },
        tabBarShowLabel: false,
        tabBarContentContainerStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name={"Important Urgent"}
        component={ImportantUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="clockcircle"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Important Not-Urgent"}
        component={ImportantNotUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-calendar"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
        }}
      />

      <Tab.Screen
        name={"Not-Important Urgent"}
        component={NotImportantUrgent}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="share-all-outline"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Not-Important Not-Urgent"}
        component={Trash}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-trash"
              size={24}
              color={focused ? "#333333" : "#B0D9B1"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
