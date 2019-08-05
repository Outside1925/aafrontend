import React, { Component } from 'react';
import {StyleSheet,  View} from 'react-native';  
// import console = require('console');

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Card, CardItem, } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Questions from './Question';

import { Sae } from 'react-native-textinput-effects';
export default class HomeScreen extends React.Component {  


  constructor(props){
    super(props)
    this.state={
        questions:[{title:"lll"},]
    }
  }

  componentDidMount(){
    console.log("Home Screen");
    console.log("JWT" , this.jwt);

  
  }

  removeatIndex=(index)=>{
      console.log(index);

      const newList = this.state.questions;      
      newList.splice(index, 1);
      // this.state.questions.splice(index, 1);

      if( this.state.questions.length == 0){
        this.setState({
          questions:[]
       })
      }else{
        this.setState({
          questions:newList
        })
      }

  }


  lapsList() {
      this.state.questions.map((index,data) => {
          return (        
              <Questions index={1} removeAtIndex={this.removeatIndex}/>
          )
      })
  }



    render() {  
      return (  
        <Container>
        {/* <Header /> */}
        <Content>

          {
            this.state.questions.map((data,index) => {
              return (        
                  <Questions index={index} removeAtIndex={this.removeatIndex}/>
              )
           })

          }


        </Content>
      </Container>
      );  
    }  
  }

  const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },  
});  