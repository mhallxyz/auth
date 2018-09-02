import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={styles.View}>
      <Text style={styles.Text}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    elevation: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative',
  },
  Text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export { Header };
