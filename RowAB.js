import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
});

const RowAB = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      10/10/10 {props.name.last} {props.name.first}
    </Text>
  </View>
)

export default RowAB;
