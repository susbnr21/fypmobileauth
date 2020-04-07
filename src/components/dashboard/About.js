import React, {Component} from 'react';
import { StyleSheet, Text, View,
    Image, TouchableOpacity, ImageBackground, ScrollView} 
    from 'react-native';

class About extends Component{
    static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        header: null,
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
                            <Text style={styles.title}>
                                Welcome to About Page
                            </Text>

                            <Text style={styles.para}>
                                Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                                culpa qui officia deserunt mollit anim id est laborum.""Sed ut perspiciatis unde omnis iste natus error 
                                sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
                                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
                                eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor 
                                sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam 
                                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
                                qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas 
                                nulla pariatur?
                            </Text>
                        </View>

                        <TouchableOpacity
                            style={styles.btx}
                            onPress={() =>
                                this.props.navigation.navigate('Selection')}>
                                <Text style={styles.txtbtx}> Next </Text>
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
        height: '100%',
        width: '100%',
    },

    dview: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    logo: {
        width: 128,
        height: 128,
        marginTop: 50
    },

    color: {
        backgroundColor: 'white',
        width: 350,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: 'Arial',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    para: {
        fontFamily: 'Arial',
        fontSize: 15,
        color: 'orange',
        fontWeight: 'bold',
        textAlign: 'justify',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
    btx: {
        width: 170,
        backgroundColor: '#296AD1',
        marginVertical: 25,
        paddingVertical: 18,
        marginTop: 20,
        borderRadius: 35,
    },

    txtbtx: {
        fontSize: 20,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: 'white',
    },
})

export default About;