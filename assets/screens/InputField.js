import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PhoneStorageManager from '../../assets/jwtStorageManager'

import {H1,Content} from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";
import {Alert} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Makiko } from 'react-native-textinput-effects';


export default class AuditScreen extends Component {

    constructor(props){
            super(props)
            this.state={
                color:"silver",
                text:''
            }
    }
 
 
    clearField = () =>{
            this.setState({
                text:''
            })
            Alert.alert('Answer Submitted')
    }


 
  render() {
    return (                  
        <View style={{width:"90%",height:250,backgroundColor:this.props.color,alignSelf:"center",borderRadius:20/2,padding:15,justifyContent:"space-between",marginBottom:"4%"}}>
            <Text style={{fontSize:20,color:"white"}}>{this.props.question}</Text>
            <Text style={{fontSize:10,color:"silver"}}>{this.props.title}</Text>
            <View style={{height:37,width:"100%", flexDirection:"row"}}>
                <Icon name="comments" size={20} color="white" /> 
            </View>

            
            <Makiko
            
                label={'Add Answer'}
                iconClass={Icon}
                iconName={'comment'}
                iconColor={'white'}
                value={this.state.text}
                inputPadding={16}
                inputStyle={{ color: '#db786d' , width:"100%" }}
                
            />
            <TouchableOpacity onPress={this.clearField} style={{width:"40%",height:40,backgroundColor:"purple",alignSelf:"flex-end",margin:10,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"white"}}>ADD ANSWER</Text>
            </TouchableOpacity>
        </View>
                      
                    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});