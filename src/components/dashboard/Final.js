import React, { Component } from 'react';
import { View, Text, ImageBackground, 
        ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Final extends Component{
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }

    render() {
        return(
            <ImageBackground source={require('../../assets/boxs.jpeg')} style={styles.view}>
                <ScrollView>
                    <View style={styles.dview}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../../assets/Logo.png')}>
                            </Image>
                        </View>
                        
                        <View style={styles.color}>
                            <Text style={styles.title}>Thank You For Using Rental Shifters. 
                            We Hope you liked Rental Shifters. We will try to do the best of 
                            our service. Have a nice day.</Text> 
                        </View>

                        <TouchableOpacity style={styles.track}
                        onPress={() =>
                            this.props.navigation.navigate('Maps')}>
                            <Text style={{color:"white"}}>TRACK YOUR BELONGINGS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.btx}
                        onPress={() =>
                            this.props.navigation.navigate('Login')}
                            onClick={this.onLogoutClick}>
                            <Text style={styles.txtbtx}>LOG OUT</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    dview: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 128,
        height: 128,
        marginTop: 120
    },

    title: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 25,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },

    color: {
        backgroundColor: 'white',
        width: 350,
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtbtx: {
        fontSize: 14,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },

    btx: {
        width: 110,
        backgroundColor: '#E10000',
        marginVertical: 25,
        paddingVertical: 10,
        marginTop: 50,
        borderRadius: 10,
        marginBottom: 100
    },

    track: {
        width:"60%",
        backgroundColor:"#296AD1",
        borderRadius:20,
        padding:10,
        alignItems:"center",
        marginTop:100,
        paddingVertical: 18,
        marginBottom: 20
    },

});

export default Final;