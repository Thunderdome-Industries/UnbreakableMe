import AToZGuideToComeback from "../components/AToZGuideToComeback";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PBDHome from "../components/PBDHome";
import PBDSecondHome from "../components/PBDSecondHome";
import PBDThirdHome from "../components/PBDThirdHome";
import PBDAbout from "../components/PBDAbout";
const Tab = createBottomTabNavigator();

export default function AdditionalScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#272829",
        tabBarInactiveTintColor: "#F0E9D2",
        tabBarActiveBackgroundColor: "#F0E9D2",
        tabBarInactiveBackgroundColor: "#272829",
        headerStyle: {
          backgroundColor: "#272829",
        },
        headerTitleStyle: {
          color: "#F0E9D2",
          fontWeight: "bold",
          fontSize: 25,
        },
      }}
    >
      <Tab.Screen
        name={"Comeback"}
        component={AToZGuideToComeback}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="sword"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD"}
        component={PBDHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD II"}
        component={PBDSecondHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD III"}
        component={PBDThirdHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="pillar"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"PBD About"}
        component={PBDAbout}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="robot-excited-outline"
              size={24}
              color={focused ? "#272829" : "#F0E9D2"}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}