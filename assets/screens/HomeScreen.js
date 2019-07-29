import React, { Component } from 'react';
import {StyleSheet,  View} from 'react-native';  
// import console = require('console');

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Card, CardItem, } from 'native-base';

export default class HomeScreen extends React.Component {  

  componentDidMount(){
    console.log("Home Screen");
    console.log("JWT" , this.jwt);
  }

    render() {  
      return (  
        <Container>
        {/* <Header /> */}
        <Text style={{alignSelf:"center",paddingTop:"10%",color:"Black",fontSize:24,fontWeight:"300",marginBottom:20}}>My Questions</Text>
        <Content>


        {/* <Card>
          <CardItem>
                     <Body>
                        <Text>Fawad Mahmood</Text>
                        <Text note numberOfLines={1}>This is my First Question?</Text>
                    </Body>
          </CardItem>
                <List>
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
                  </ListItem>
                </List>
            </Card> */}
      


            <Card>
          <CardItem>
                     <Body>
                        <Text>Title9?</Text>
                        <Text note numberOfLines={1}>QuestionfromPhone2?</Text>
                    </Body>
          </CardItem>
                <List>
                  <ListItem thumbnail>
                    <Body>
                      {/* <Text>doiwannaputtitle</Text> */}
                      <Text note numberOfLines={1}>Simple Answer</Text>
                    </Body>
                    <Right>
                      {/* <Button transparent>
                        <Text>View</Text>
                      </Button> */}
                    </Right>
                  </ListItem>

                  <ListItem thumbnail>
                    <Body>
                      <Text></Text>
                      <Text note numberOfLines={1}>Longggggggggggggggggg . .</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Text>View</Text>
                      </Button>
                    </Right>
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
                  </ListItem> */}
                </List>
            </Card>



            {/* <Card>
          <CardItem>
                     <Body>
                        <Text>Fawad Mahmood</Text>
                        <Text note numberOfLines={1}>This is my First Question?</Text>
                    </Body>
          </CardItem>
                <List>
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
                  </ListItem>
                </List>
            </Card> */}
      
      
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