import React, {Component} from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, StatusBar,ImageBackground,
    KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } 
    from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import axios from 'axios';

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component{
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  };

  handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }

    render() {
      // const { errors } = this.state;

        return(
                <ImageBackground source={require('../../assets/boxs.jpeg')} style={styles.regform}>
                  <ScrollView>
                    <StatusBar barStyle='dark-content'/>
                    <KeyboardAvoidingView behavior='padding'>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.regis}>
                                <Image style={styles.logos}
                                    source={require('../../assets/Logo.png')}>
                                </Image>

                                <TextInput style={styles.textinput}
                                            placeholder='Your Name'
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            />

                                <TextInput style={styles.textinput}
                                            placeholder='Your Email'
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            />
                                
                                <TextInput style={styles.textinput}
                                            placeholder='Your Password'
                                            value={this.state.password}
                                            secureTextEntry={true}
                                            onChange={this.handleChange}
                                            />

                                <TextInput style={styles.textinput}
                                            placeholder='Confirm Password'
                                            value={this.state.password2}
                                            secureTextEntry={true}
                                            onChange={this.handleChange}
                                            />

                                <TouchableOpacity
                                    style={styles.regbtncontainer}
                                    // onPress={() =>
                                    //     this.props.navigation.navigate('')}
                                        onPress={this.handleSubmit}
                                        type="submit"
                                        >
                                        <Text style={styles.regbtntxt}>Register</Text>
                                </TouchableOpacity>

                                <Text style={styles.btnacc}>Already Have an Account?</Text>

                                <TouchableOpacity
                                onPress={() => 
                                    this.props.navigation.navigate('Login')}
                                    >
                                    <Text style={styles.loginbtn}>LOG IN</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAvoidingView>
                    </ScrollView>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    regis: {
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    regform: {
      alignSelf: 'stretch',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    logos: {
      width: 128,
      height: 128,
      marginBottom: 40,
      marginTop: 200,
    },
  
    textinput: {
      height: 50,
      backgroundColor: 'rgba(255,255,255,0.2)',
      textAlign: 'center',
      color: '#302F35',
      width: 300,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 35
    },
  
    regbtncontainer: {
      width: 200,
      backgroundColor: '#cc0000',
      marginVertical: 25,
      paddingVertical: 6,
      marginTop: 1,
      borderRadius: 35
    },
  
    regbtntxt: {
      fontSize: 25,
      fontFamily: 'Chalkboard SE',
      textAlign: 'center',
      fontWeight: '500'
    },
  
    btnacc: {
      fontFamily: 'Chalkboard SE',
      fontSize: 16,
      marginTop: 10,
    },
  
    loginbtn: {
      color: 'blue',
      textDecorationLine: 'underline',
      fontSize: 16,
      fontFamily: 'Chalkboard SE',
      textAlign: 'center',
      marginBottom: 140,
    }
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);