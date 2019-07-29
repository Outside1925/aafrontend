import React, { Component } from 'react';
import {Alert} from 'react-native';
import PhoneStorageManager from '../../assets/jwtStorageManager'
//import { AsyncStorage } from 'react-native';
import {
    Button,
    Keyboard,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
//import { loadSettings, saveSettings } from '../settingsStorage';

export default class CreationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', question: '', jwt: '' }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        //this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        /*const initialState = await loadSettings();
    
        this.setState(initialState);*/
        PhoneStorageManager._getData("key")
            // .then((response) => this.setState ({jwt: response}) , ()=>{
            //     console.log('creation state jwt', this.state.jwt);
            //     })
            .then((response) => this.jwt = response)
    }

    handleTitleChange(title) {
        this.setState({ title });
    }
    /*handleLocationChange(location) {
      this.setState({ location });
    }*/
    handleQuestionChange(question) {
        this.setState({ question });
    }

    handleSubmit() {
        console.log('this is creation this.jwt', this.jwt)
        fetch('http://auditarmy.com/api/forms', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "jwt": String(this.jwt),
                "form": {
                    "budget": 10,
                    "lat": 1.1,
                    "lng": 2.2,
                    "radius": 30.0,
                    "reward": 1,
                    "title": this.state.title
                }
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('forms respo ', responseJson)
                Alert.alert('Question Submitted');
            })
            .catch((error) => {
                console.error(error);
            });
        // let collection ={}
        // collection.jwt = this.props.jwt
        // collection.title = this.state.title

        // var url = 'https://auditarmy.com/api/forms/';
        // fetch(url, {
        // method: 'POST', // or 'PUT'
        // body: JSON.stringify(collection), // data can be `string` or {object}!
        // headers:{
        //     'Content-Type': 'application/json'
        // }
        // }).then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        // .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Create New Question</Text>
                </View>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Title"
                            maxLength={50}
                            //onBlur={Keyboard.dismiss}
                            value={this.state.title}
                            onChangeText={this.handleTitleChange}
                        />
                    </View>
                    {/*
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Location"
              maxLength={50}
              //onBlur={Keyboard.dismiss}
              value={this.state.location}
              onChangeText={this.handleLocationChange}
            />
          </View>
          */}
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textLargeInput}
                            textAlignVertical={'top'}
                            multiline
                            placeholder="Questions"
                            maxLength={200}
                            //onBlur={Keyboard.dismiss}
                            value={this.state.question}
                            onChangeText={this.handleQuestionChange}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            style={styles.saveButton}
                            onPress={this.handleSubmit}
                        >
                            <Text style={styles.saveButtonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        backgroundColor: '#F5FCFF',
    },
    header: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 15
    },
    textLargeInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 200,
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
});