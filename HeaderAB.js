import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const HeaderAB = (props) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder='Search me...'
      onChangeText={
        (text) => console.log(text)
      }
      underlineColorAndroid="transparent"
    />
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1'
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2
  }

})

export default HeaderAB;

