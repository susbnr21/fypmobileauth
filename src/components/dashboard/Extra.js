import React, {Component} from 'react'
import {CheckBox} from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

class Extra extends Component{
    state={
        selectedLang:0
      }

      static navigationOptions = {
        headerStyle: {backgroundColor: '#8B8C8C', borderBottomWidth: 0},
        headerShown: false,
      }


    render() {


        return(
            <ImageBackground source={require('../../assets/boxs.jpeg')} style={styles.view}>
            <ScrollView>
                <View style={styles.dview}>
                <Text style={styles.header}>Select Any Extra Preferences You Want 🏡</Text>
                <Text style={styles.note}>(Note: The Extra Preferences Also take extra charges)</Text>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===1?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===1? "bold" :"normal"
                        }}
                        >None</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===2} color="#fc5185" onPress={()=>this.setState({selectedLang:2})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===2?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===2? "bold" :"normal"
                        }}
                        >House Rearrangement</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===3} color="#fc5185" onPress={()=>this.setState({selectedLang:3})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===3?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===3? "bold" :"normal"
                        }}
                        >Room Decoration</Text>
                    </View>
                    <TouchableOpacity style={styles.submit}
                    onPress={() =>
                        this.props.navigation.navigate('Final')}>
                        <Text style={{color:"white"}}>SUBMIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.track}
                    onPress={() =>
                        this.props.navigation.navigate('Maps')}>
                        <Text style={{color:"white"}}>TRACK YOUR BELONGINGS</Text>
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

    note: {
        color: 'red',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 30
    },

    header:{
        fontSize:25,
        fontWeight:"bold",
        color:"#364f6b",
        marginBottom:10,
        marginTop: 100,
        padding: 9
    },

    item:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:15,
        flexDirection:"row",
    },

    checkBoxTxt:{
        marginLeft:20
    },

    submit:{
        width:"80%",
        backgroundColor:"#fc5185",
        borderRadius:20,
        padding:10,
        alignItems:"center",
        marginTop:40,
        paddingVertical: 18,
        marginBottom: 20
    },

    txt: {
        color: 'red',
        fontFamily: 'Arial',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 30,
        width: 300
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

})
export default Extra;