import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PhoneStorageManager from '../../assets/jwtStorageManager'

import {H1,Content} from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";

import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class AuditScreen extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    /*const initialState = await loadSettings();

    this.setState(initialState);*/
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    await PhoneStorageManager._getData("key")
    // .then((response) => this.setState ({jwt: response}) , ()=>{
    //     console.log('creation state jwt', this.state.jwt);
    //     })
    .then((response) => this.jwt = response)

    //console.log('jwt at fetchdata',this.jwt)
    const response = await fetch('http://auditarmy.com/api/forms',{
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + this.jwt,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      audits = (responseJson);
      this.setState({data: Object.values(audits)})
      console.log('Array of audits',audits);
      console.log('audit state', this.state.data);
      //console.log('AuditScreen respo ', responseJson)
      //console.log('auditscreen jwt', this.jwt)
    })
  };

  _renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
      }}
    >
      <View style={{ justifyContent: 'center', marginLeft: 5 }}>
        <Text>{`${item.title} ${item.id}`}</Text>
        <Text>{item.title}</Text>
      </View>
    </View>
  );

  _keyExtractor = (item, index) => item.title;
  render() {
    return (
    
      <View style={{width:"100%",height:"100%",backgroundColor:"#2b2b38"}}>
        <Text style={{alignSelf:"center",paddingTop:"10%",color:"white",fontSize:24,fontWeight:"300",marginBottom:20}}>All Questions</Text>
      
        <Content>

          <TouchableOpacity>
              <View style={{width:"90%",height:160,backgroundColor:"#de368d",alignSelf:"center",borderRadius:20/2,padding:15,justifyContent:"space-between",marginBottom:"4%"}}>
                  <Text style={{fontSize:20,color:"white"}}>Why do people clear the screen multiple times when using a calculator?</Text>
                  <Text style={{fontSize:10,color:"silver"}}>Things Science Cant Answer</Text>
                  <View style={{height:37,width:"100%", flexDirection:"row"}}>
                      <Icon name="comments" size={30} color="white" /> 
                      <Text style={{color:"white",marginLeft:5,fontSize:23}}></Text>
                  </View>
              </View>
          </TouchableOpacity>

          {/* <TouchableOpacity>
              <View style={{width:"90%",height:160,backgroundColor:"#685aa7",alignSelf:"center",borderRadius:20/2,padding:15,justifyContent:"space-between",marginBottom:"4%"}}>
                  <Text style={{fontSize:20,color:"white"}}></Text>
                  <Text style={{fontSize:10,color:"silver"}}></Text>
                  <View style={{height:37,width:"100%", flexDirection:"row"}}>
                      <Icon name="comments" size={30} color="white" /> 
                      <Text style={{color:"white",marginLeft:5,fontSize:23}}></Text>
                  </View>
              </View>
          </TouchableOpacity> */}


          <TouchableOpacity>
              <View style={{width:"90%",height:160,backgroundColor:"black",alignSelf:"center",borderRadius:20/2,padding:15,justifyContent:"space-between",marginBottom:"4%"}}>
                  <Text style={{fontSize:20,color:"white"}}>Question1?</Text>
                  <Text style={{fontSize:10,color:"silver"}}>Title1</Text>
                  <View style={{height:37,width:"100%", flexDirection:"row"}}>
                      <Icon name="comments" size={30} color="white" /> 
                      <Text style={{color:"white",marginLeft:5,fontSize:23}}></Text>
                  </View>
              </View>
          </TouchableOpacity>



        </Content>
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