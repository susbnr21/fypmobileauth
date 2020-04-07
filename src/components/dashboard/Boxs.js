import React, {Component} from 'react'
import {CheckBox} from 'native-base';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

class Boxs extends Component{
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
                <Text style={styles.header}>Select the Number of Boxs 📦</Text>
                <Text style={styles.note}>(Note: It is not mandatory to select the Boxs)</Text>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===1?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===1? "bold" :"normal"
                        }}
                        >1 Box</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===2} color="#fc5185" onPress={()=>this.setState({selectedLang:2})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===2?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===2? "bold" :"normal"
                        }}
                        >2 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===3} color="#fc5185" onPress={()=>this.setState({selectedLang:3})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===3?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===3? "bold" :"normal"
                        }}
                        >3 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===4} color="#fc5185" onPress={()=>this.setState({selectedLang:4})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===4?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===4? "bold" :"normal"
                        }}
                        >4 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===5} color="#fc5185" onPress={()=>this.setState({selectedLang:5})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===5?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===5? "bold" :"normal"
                        }}
                        >5 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===6} color="#fc5185" onPress={()=>this.setState({selectedLang:6})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===6?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===6? "bold" :"normal"
                        }}
                        >6 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===7} color="#fc5185" onPress={()=>this.setState({selectedLang:7})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===7?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===7? "bold" :"normal"
                        }}
                        >7 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===8} color="#fc5185" onPress={()=>this.setState({selectedLang:8})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===8?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===8? "bold" :"normal"
                        }}
                        >8 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===9} color="#fc5185" onPress={()=>this.setState({selectedLang:9})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===9?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===9? "bold" :"normal"
                        }}
                        >9 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===10} color="#fc5185" onPress={()=>this.setState({selectedLang:10})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===10?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===10? "bold" :"normal"
                        }}
                        >10 Boxs</Text>
                    </View>
                    <View style={styles.item} >
                        <CheckBox checked={this.state.selectedLang===11} color="#fc5185" onPress={()=>this.setState({selectedLang:11})}/>
                        <Text style={
                        {...styles.checkBoxTxt,
                            color:this.state.selectedLang===11?"#fc5185":"gray",
                            fontWeight:this.state.selectedLang===11? "bold" :"normal"
                        }}
                        >More Than 10 Boxs</Text>
                    </View>
                    <TouchableOpacity style={styles.submit}
                    onPress={() =>
                        this.props.navigation.navigate('Extra')}>
                        <Text style={{color:"white"}}>SUBMIT</Text>
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
        padding: 9,
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

})
export default Boxs;