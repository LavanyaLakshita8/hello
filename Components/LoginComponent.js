// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     StatusBar,
//     Alert,
//     ActivityIndicator
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage'
// const userInfo = [
//     {
//         username: 'admin',
//         password: '123456'
//     },
//     {
//         username: 'user',
//         password: '123'
//     },
//     {
//         username: 'lavanya',
//         password: '1234'
//     },
//     {
//         username: 'avi',
//         password: '12345'
//     },
//     {
//         username: 'man',
//         password: '1234567'
//     },
// ]
// class LoginComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             usersInfoData: [],
//             username: '',
//             password: ''
//         }
//     }
//     storeData = async () => {
//         try {
//             await AsyncStorage.setItem('usersInfo', JSON.stringify(userInfo));
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     validateFields = () => {
//         const { username, password } = this.state
//         let valid = false
//         if(username.length == 0) {
//             Alert.alert('Message', 'Username can not be empty!')
//             valid = false
//             return valid
//         } else if (password.length == 0) {
//             Alert.alert('Message', 'Password can not be empty!')
//             valid = false
//             return valid
//         } else {
//             valid =  true
//         }
//         return valid
//     }
//     loginUser = async () => {
//         const { username, password, usersInfoData } = this.state
//         let valid = this.validateFields()
//         if(valid) {
//             this.setState({ isLoading: true })
//             let userMatched = false
//             usersInfoData.forEach(element => {
//                 if (element.username == username && element.password == password) {
//                     let userInfo ={
//                         username,
//                         password
//                     }
//                     await AsyncStorage.setItem('userLogin', JSON.stringify(userInfo))
//                     userMatched = true
//                     return
//                 }
//             });
//             if(userMatched) {
//                 this.props.navigation.navigate('Dashboard')
//             } else {
//                 this.setState({ isLoading: false })
//                 Alert.alert('Message', 'Username or password is not correct!')
//             }   
//         } else {
//             this.setState({ isLoading: false })
//         }
//     }
//     componentDidMount() {
//         const usersInfo = await AsyncStorage.getItem('usersInfo')
//         if(!usersInfo) {
//             this.storeData()
//         }
//         const usersInfoData = usersInfo ? JSON.parse(usersInfo) : userInfo
//         const userLoginData = await AsyncStorage.getItem('userLogin');
//         if (userLoginData) {
//             const userLogin = JSON.parse(userLoginData)
//             this.setState({
//                 usersInfoData: usersInfoData,
//                 username: userLogin.username,
//                 password: userLogin.password
//             }, () => {
//                 this.loginUser()
//             })
//         } else {
//             this.setState({ isLoading: false })
//         }
//     }
//     render() {
//         const { username, password, isLoading } = this.state
//         return (
//             <View style={styles.container}>
//                 <StatusBar
//                     backgroundColor="#1E90FF"
//                     barStyle="light-content"
//                 />
//                 <Text style={styles.welcome}>Login To My Music App</Text>
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     onChangeText={(username) => this.setState({ username })}
//                     value={username}
//                     autoCapitalize="none"
//                 />
//                 <TextInput
//                     style={styles.input}
//                     placeholder="Password"
//                     secureTextEntry
//                     onChangeText={(password) => this.setState({ password })}
//                     value={password}
//                 />
//                 <View style={styles.btnContainer}>
//                     <TouchableOpacity
//                         style={styles.userBtn}
//                         onPress={this.loginUser}
//                     >
//                         <Text style={styles.btnTxt}>Login</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <ActivityIndicator 
//                     animating={isLoading}
//                     color={'blue'}
//                     size="large"
//                 />
//             </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: '#1E90FF'
//         backgroundColor: '#ADEFD1FF'
//     },
//     welcome: {
//         fontSize: 25,
//         textAlign: 'center',
//         margin: 10,
//         color: '#fff',
//         fontFamily: 'DancingScript-Bold',
//         fontWeight: 'bold'
//     },
//     input: {
//         width: '90%',
//         backgroundColor: '#fff',
//         padding: 15,
//         marginBottom: 10
//     },
//     btnContainer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         width: '90%'
//     },
//     userBtn: {
//         // backgroundColor: '#FFD700',
//         backgroundColor: '#00203FFF',
//         padding: 15,
//         width: "45%"
//     },
//     btnTxt: {
//         fontSize: 18,
//         textAlign: 'center',
//         color: 'white'
//     }
// })
// export default LoginComponent;













//....................................................




import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert,
    ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
const userInfo = [
    {
        username: 'admin',
        password: '123456'
    },
    {
        username: 'user',
        password: '123'
    },
    {
        username: 'lavanya',
        password: '1234'
    },
    {
        username: 'abhi',
        password: '12345'
    },
    {
        username: 'man',
        password: '1234567'
    },
]
class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            usersInfoData: [],
            username: '',
            password: ''
        }
    }
    storeData = async () => {
        try {
            await AsyncStorage.setItem('usersInfo', JSON.stringify(userInfo));
        } catch (error) {
            console.log(error);
        }
    }
    validateFields = () => {
        const { username, password } = this.state
        let valid = false
        if(username.length == 0) {
            Alert.alert('Message', 'Username can not be empty!')
            valid = false
            return valid
        } else if (password.length == 0) {
            Alert.alert('Message', 'Password can not be empty!')
            valid = false
            return valid
        } else {
            valid =  true
        }
        return valid
    }
    loginUser = async () => {
        const { username, password, usersInfoData } = this.state
        let valid = this.validateFields()
        if(valid) {
            this.setState({ isLoading: true })
            let userMatched = false
            usersInfoData.forEach(element => {
                if (element.username == username && element.password == password) {
                    let userInfo ={
                        username,
                        password
                    }
                    await AsyncStorage.setItem('userLogin', JSON.stringify(userInfo))
                    userMatched = true
                    return
                }
            });
            if(userMatched) {
                this.props.navigation.navigate('Dashboard')
            } else {
                this.setState({ isLoading: false })
                Alert.alert('Message', 'Username or password is not correct!')
            }   
        } else {
            this.setState({ isLoading: false })
        }
    }
    componentDidMount() {
        const usersInfo = await AsyncStorage.getItem('usersInfo')
        if(!usersInfo) {
            this.storeData()
        }
        const usersInfoData = usersInfo ? JSON.parse(usersInfo) : userInfo
        const userLoginData = await AsyncStorage.getItem('userLogin');
        if (userLoginData) {
            const userLogin = JSON.parse(userLoginData)
            this.setState({
                usersInfoData: usersInfoData,
                username: userLogin.username,
                password: userLogin.password
            }, () => {
                this.loginUser()
            })
        } else {
            this.setState({ isLoading: false })
        }
    }
    render() {
        const { username, password, isLoading } = this.state
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#1E90FF"
                    barStyle="light-content"
                />
                <Text style={styles.welcome}>Login To My Music App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={(username) => this.setState({ username })}
                    value={username}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={password}
                />
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                        onPress={this.loginUser}
                    >
                        <Text style={styles.btnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
                <ActivityIndicator 
                    animating={isLoading}
                    color={'blue'}
                    size="large"
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#1E90FF'
        backgroundColor: '#ADEFD1FF'
    },
    welcome: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontFamily: 'DancingScript-Bold',
        fontWeight: 'bold'
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
        color: 'white'
    }
})
export default LoginComponent;