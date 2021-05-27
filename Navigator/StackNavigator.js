import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from '../Components/Login.js';
import Dashboard from '../Components/Dashboard.js';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="LoginCmponent" component={LoginComponent} /> */}

            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

const DashStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    );
}

// export { MainStackNavigator, DashStackNavigator};
export { MainStackNavigator };