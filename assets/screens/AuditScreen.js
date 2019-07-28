import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PhoneStorageManager from '../../assets/jwtStorageManager'

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
      <Text/>
      // <FlatList
      //   data={this.state.data}
      //   renderItem={this._renderItem}
      //   keyExtractor={this._keyExtractor}
      // />
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