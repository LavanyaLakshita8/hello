import React, {Component} from 'react';
import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';


class Dashboard extends Component {

    render() {
        return (
            <View style={styles.container}>
                 <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={styles.userBtn}
                    >
                        <Text style={styles.btnTxt}>Add Album</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.userBtn}
                    >
                        <Text style={styles.btnTxt}>Show Album</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Dashboard;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#ADEFD1FF'

    },
    btnContainer: {
        justifyContent: 'center',
        width: '100%',
        alignItems:'center',
    },
    userBtn: {
        backgroundColor: '#00203FFF',
        padding: 15,
        width: "55%",
        margin:10,
    },
    btnTxt: {
        fontSize: 18,
        textAlign: 'center',
        color :'white'
    }
})