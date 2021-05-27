import React, {Component} from 'react';
import {View} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

class AuththenticationScreen extends Component{
    constructor(props){
        super(props);
        this._loadData();
    }
    render(){
        return(
            <View>

            </View>
        )
    }
}
// _loadData=async()=>{
//     const isLoggedIn =await AsyncStorage.getItem('isLoggedIn');
//     this.props.navigation.navigate(isLoggedIn !== '1' ? 'MainStackNavigator' : 'dashStackNavigator');
// }

// export default AuththenticationScreen;
