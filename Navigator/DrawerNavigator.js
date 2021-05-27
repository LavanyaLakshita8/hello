import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Login from '../Components/Login.js';
import Dashboard from '../Components/Dashboard.js';

// import DrawerMenu from "../Components/DrawerMenu";

const DrawerNavigator = () => {
    return (
        // <Drawer.Navigator drawerContent={()=><DrawerMenu></DrawerMenu>} >
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />

            <Drawer.Screen name="Login" component={Login} />

        </Drawer.Navigator>
    );
}

export default DrawerNavigator;