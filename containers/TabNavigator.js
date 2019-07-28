//orginal tab navigator 
import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons'; 
import { Input, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import HomeScreen from '../assets/screens/HomeScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
import AuditScreen from '../assets/screens/AuditScreen';
import CreationScreen from '../assets/screens/CreationScreen';

const styles = StyleSheet.create({  
      container: {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center'  
      },  
  });  

const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Image: { screen: AuditScreen,  //replace with auditstack after routing.
            navigationOptions:{  
                tabBarLabel:'Audits',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Creation: {  
            screen: CreationScreen,  
            navigationOptions:{  
                tabBarLabel:'Create',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>  
                    </View>),  
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },
    },  
);  

const AppContainer = createAppContainer(TabNavigator);
//export default AppContainer;
export default class NavigationManager extends React.Component   {
    constructor(props){
        super(props);
    }
    render() {
        return <AppContainer/>
    }
}
