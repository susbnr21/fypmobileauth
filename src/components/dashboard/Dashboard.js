import React, {Component} from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, ImageBackground, ScrollView } 
    from 'react-native';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };

    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }

    render() {
        const { user } = this.props.auth;

        return (
            <ImageBackground source={require('../../assets/boxs.jpeg')} style={styles.view}>
                <ScrollView>
                <View style={styles.dview}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo}
                            source={require('../../assets/Logo.png')}>
                        </Image>
                    </View>

                        <Text style={styles.title}>Hey There, Sushil</Text> 
                        <Text style={styles.setitle}>Welcome To Rental Shifters 👏</Text>

                        <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            this.props.navigation.navigate('About')}>
                            <Text style={styles.txtbtn}> Next </Text>
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

    title: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
    },

    setitle: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 40,
    },

    logo: {
        width: 128,
        height: 128,
        marginTop: 120
    },

    button: {
        width: 170,
        backgroundColor: '#296AD1',
        marginVertical: 25,
        paddingVertical: 18,
        marginTop: 1,
        borderRadius: 35,
        marginBottom: 100
    },

    txtbtn: {
        fontSize: 20,
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

    txtbtx: {
        fontSize: 14,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },
});

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Dashboard);
