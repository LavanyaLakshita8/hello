import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './Navigator/DrawerNavigator.js';
import React, { useState, useEffect} from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { MainStackNavigator } from './Navigator/StackNavigator.js';

export default function App() {
    const [splash, setSplash] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 1000);
    }, []);

    return splash ?
        (
            <View style={{ flex: 1, justifyContent: 'center',  backgroundColor: '#00203FFF', }}>

                <View>
                    <Image style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 20 }} source={require('./Images/music.jpg')} />
                </View>

                <View>
                    <ActivityIndicator />
                    <ActivityIndicator size="large" />
                    <ActivityIndicator size="large" color="white" />
                </View>
            </View>
        )

        :

        (
            <NavigationContainer>
                <MainStackNavigator />
                {/* <DrawerNavigator/> */}
            </NavigationContainer>
        );
}