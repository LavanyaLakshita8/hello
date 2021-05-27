import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity

} from 'react-native';

const data_features = [
    {
        "id": 1,
        "name": 'Login',
        // "photo": require("../Images/home.png")
    },
    {
        "id": 2,
        "name": 'Dashboard',
        // "photo": require("../Images/profile.png")
    },
]

const DrawerMenu = () => {
    const navigation = useNavigation();
  
    const onPressItems = (item) =>{
        switch (item.id) {
            case 1:
                 navigation.navigate("Login")
                break;
            case 2:
                 navigation.navigate("Dashboard")
                   break;
            default:
                break;
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#f2f2f2', width: '100%' }}>

            <View>
                {/* <Image style={{ width: "90%", height: 100, resizeMode: 'contain', margin: 10 }}
                    source={require("../Images/adri.png")}></Image> */}
            </View>

            <FlatList
                showsVerticalScrollIndicator={true}
                data={data_features}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) =>
                   <TouchableOpacity onPress={()=>onPressItems(item)}>
                    <View style={styles.center}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Image source={item.photo}
                                style={styles.imageStyle} /> */}
                            <View style={{ marginLeft: 10,justifyContent:'center' }}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                }></FlatList>
        </View>
    )
}

export default DrawerMenu;

const styles = StyleSheet.create({
    imageStyle: {
        height: 20,
        width: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    title: {
        fontSize: 15,
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    center: {
        marginTop: 10,
        marginLeft: 10,
        flexDirection: 'row',
        height: 40,
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 10,
    },
})