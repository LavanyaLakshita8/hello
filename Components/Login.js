import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const userInfo = {
    username: 'admin',
    password: '123456'
}



class Login extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    _login = async () => {
        if (userInfo.username === this.state.username && userInfo.password === this.state.password) {


            try {
                await AsyncStorage.setItem('userData',JSON.stringify(userInfo));

                // alert('Logged In');
                this.props.navigation.navigate('Dashboard')
              } catch (error) {
                 // Error saving data
                 console.log(error);
               }

        }
        else {
            alert('username or password is incorrect.');
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1e90ff"
                    barStyle="light-content"
                />

                <Text style={styles.welcome}>Login To My Music App</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={this._login}
                    >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1e90ff'
        backgroundColor:'#ADEFD1FF'
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontFamily: 'DancingScript-Bold',
        fontWeight:'bold'
    },
    input: {
        width: '90%',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%'
    },
    userBtn: {
        // backgroundColor: '#FFD700',
        backgroundColor: '#00203FFF',
        padding: 15,
        width: "45%"
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color :'white'
    }

})

export default Login;