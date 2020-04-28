import React, {Component} from 'react';
import { StyleSheet, Text, View,
     Image, TextInput, StatusBar, ImageBackground,
     KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } 
     from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// For Login
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
// import axios from 'axios'



class Login extends Component{
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }
    
      constructor() {
        super();
        this.state = {
          email: "",
          password: "",
          errors: {}
        };
      }

      componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

      handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

      handleSubmit = e => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
    
        this.props.loginUser(userData);
      };

    render() {
        const { errors } = this.state;

        return(
            <ImageBackground style={styles.container} source={require('../../assets/boxs.jpeg')}>
                <ScrollView>
                    <StatusBar barStyle='dark-content'/>
                        <KeyboardAvoidingView behavior='padding'>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={styles.content}>
                                    <View style={styles.logoContainer}>
                                        <Image style={styles.logo}
                                            source={require('../../assets/Logo.png')}>
                                        </Image>
                                        <Text style={styles.title}>Account Information</Text>
                                    </View>
                                    <View style={styles.infoContainer}>
                                        <TextInput style={styles.input}
                                            onChange={this.handleChange}
                                            // value={this.state.email}
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            placeholderTextColor='rgba(255,255,255,0.8)'
                                            // returnKeyType='next'
                                            // autoCorrect={false}
                                            // onSubmitEditing={() => this.refs.txtPassword.focus()}
                                            />
                                        <TextInput style={styles.input}
                                            onChange={this.handleChange}
                                            // value={this.state.password}
                                            id="password"
                                            placeholder='Password'
                                            placeholderTextColor='rgba(255,255,255,0.8)'
                                            secureTextEntry
                                            autoCorrect={false}
                                            ref={'txtPassword'}
                                            />
                                    </View>

                                    <TouchableOpacity
                                        style={styles.buttonContainer}
                                        // onPress={() =>
                                        //     this.props.navigation.navigate('Dashboard')}
                                        
                                            >
                                        <Text style={styles.buttonText} type="submit">LOG IN </Text>
                                    </TouchableOpacity>

                                        <Text style={styles.txt}>New to Rental Shifters?</Text>

                                    <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate('Register')}>
                                        <Text style={styles.buttontxt}>Register Now</Text>
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
    content: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },

    title: {
        color: '#cc0000',
        fontSize: 20,
        fontFamily: 'Chalkboard SE',
        marginBottom: 50,
    },

    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingTop: 120
    },

    logo: {
        width: 128,
        height: 128,
    },

    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        textAlign: 'center',
        color: '#302F35',
        width: 300,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 35
    },

    buttonContainer: {
        width: 200,
        backgroundColor: '#cc0000',
        marginVertical: 25,
        paddingVertical: 6,
        marginTop: 1,
        borderRadius: 35,
        marginBottom: 100,
    },

    buttonText: {
        fontSize: 25,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        color: '#000000',
        fontWeight: '500'
    },

    design: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },

    txt:{
        fontFamily: 'Chalkboard SE',
        fontSize: 16,
        textAlign: 'center'
    },

    buttontxt: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
        fontFamily: 'Chalkboard SE',
        textAlign: 'center',
        paddingBottom: 120
    }
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

// export default Login;