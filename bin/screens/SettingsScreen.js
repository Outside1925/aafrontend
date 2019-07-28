import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.container}>
            This is settings screen.
        </Text>
        <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});