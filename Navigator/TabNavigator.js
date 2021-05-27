import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { dashStackNavigator,profileeStackNavigator } from "./StackNavigatior";
 import { Image } from "react-native";
import Dashboard from "../Components/Dashboard";
import Profile from "../Components/Profile";
import EmployeeDetails from "../Components/EmployeeDetails.js";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
            <Tab.Navigator
             screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
                 let iconName;
                 if (route.name === 'Dashboard') 
                 {
                   iconName = "Dashboard" ? require("../Images/dashboard.png") : require("../Images/dashboard.png");
                 }
                 else if (route.name === 'Profile') 
                 {
                   iconName = "Profile" ? require("../Images/profile-user.png") : require("../Images/profile-user.png");
                 }
                 return <Image source={iconName} style={{height:30,width:30, tintColor:'#708090'}} />;
               },
             })}
             tabBarOptions={{
               activeTintColor: 'blue',
               inactiveTintColor: 'grey',
                fonstSize:20
             }}
           >
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Profile" component={EmployeeDetails} />
           </Tab.Navigator>
           );
         };
    //     <Tab.Navigator>
    //         <Tab.Screen name="Dashboard" component={dashStackNavigator} />
    //         <Tab.Screen name="Profile" component={profileeStackNavigator} />
    //     </Tab.Navigator>
    // )
export default TabNavigator;