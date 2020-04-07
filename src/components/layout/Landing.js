import React, {Component} from 'react';
import { StyleSheet, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

class Landing extends Component{
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }

    render() {
        return(
            <ImageBackground style={styles.secondContainer} source={require('../../assets/boxs.jpeg')}>
                <Text style={styles.titleText}>WELCOME TO</Text>
                    <Image style={styles.logo} source={require('../../assets/Logo.png')}></Image>
                <Text style={styles.miniText}>Nepal's First Online Platform for Shifting Your Stay</Text>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() =>
                    this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    secondContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleText: {
        color: 'black',
        fontSize: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 20,
        width: 450,
        textAlign: 'center'
    },

    logo: {
        height: 180,
        width: 180
    },
    
    miniText: {
        color: '#cc0000',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20
    },

    button: {
        width: 230,
        backgroundColor: '#cc0000',
        marginVertical: 30,
        paddingVertical: 9,
        marginBottom: 10,
        borderRadius: 35
    },

    buttonText: {
        fontSize: 30,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold'
    },
});
  

export default Landing;