import React, { Component } from 'react';
import {StyleSheet, Text, View,Button} from 'react-native'; 

import {H1} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class ProfileScreen extends React.Component {  
  
    render() {  
      return (  
          <View>
            <H1 style={{alignSelf:"center",paddingTop:"10%"}}> Pei Yan </H1>

            {/* <View style={{height:90,width:"100%",justifyContent:"center",alignItems:"center"}}>
              <TouchableOpacity onPress={this.onPress}style={{width:200,height:50,backgroundColor:"blue",borderRadius:50/2,justifyContent:"center",alignItems:"center"}} >
                    <Text style={{color:"white"}}>LOGOUT</Text>
                </TouchableOpacity>
            </View> */}
          </View>
      );  
    }  
  }  

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor:"black"
    },  
});  