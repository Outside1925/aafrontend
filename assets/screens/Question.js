import React, { Component } from 'react';
import {StyleSheet,  View} from 'react-native';  
// import console = require('console');

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Card, CardItem, } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Makiko } from 'react-native-textinput-effects';

import { Sae } from 'react-native-textinput-effects';
export default class Question extends React.Component {  

    constructor(props){
        super(props)
        this.state={
            color:"silver",
            text:'',
            isEdit:false
        }
    }


    isEdit=()=>{
        this.setState({
            isEdit:!this.state.isEdit
        })
    }

    DeleteItem=()=>{
        this.props.removeAtIndex(this.props.index)
    }

    render() {  
      return (  
        <Card>
                    <CardItem>
                            <Body>
                                <View>
                                    {
                                        this.state.isEdit ?  
                                        <View style={{width:250}}>                                                                              
                                                <Makiko
                                                label={'Title?'}
                                                iconClass={Icon}
                                                iconName={'comment'}
                                                iconColor={'white'}
                                                value={this.state.text}
                                                inputPadding={16}
                                                inputStyle={{ color: '#db786d' , width:"100%" }}                
                                            />

                                            <Makiko
                                            label={'Question?'}
                                            iconClass={Icon}
                                            iconName={'comment'}
                                            iconColor={'white'}
                                            value={this.state.text}
                                            inputPadding={16}
                                            inputStyle={{ color: '#db786d' , width:"100%" }}                
                                        />
                                        </View>
                                        :
                                        <View>
                                            <Text>Weather</Text>
                                            <Text note numberOfLines={1}>How is the weather at NUS?</Text>
                                        </View>
                                    }
                                </View>

                                <View style={{width:40,height:30,position:"absolute",right:0,flexDirection:"row",justifyContent:"space-between"}}>
                                    <TouchableOpacity onPress={this.isEdit}>
                                        <Icon name={this.state.isEdit ? "check" : "edit" } size={20} color="black" /> 
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={this.DeleteItem}>
                                        <Icon name="trash" size={20} color="black" /> 
                                    </TouchableOpacity>
                                </View>
                                
                            </Body>
                    </CardItem>
                        <List>
                            <ListItem thumbnail>
                            <Body>
                                <Text>Very hot</Text>
                                {/* <Text note numberOfLines={1}> 0 </Text> */}
                            </Body>
                            {/* <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right> */}
                            </ListItem>

                            {/* <ListItem thumbnail>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right>
                            </ListItem>

                            <ListItem thumbnail>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right>
                            </ListItem> */}
                        </List>
            </Card>
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