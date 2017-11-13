import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';

const {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  StyleSheet
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {hospitalInput: '' };
  };
  searchPressed() {
    this.setState({ loading: true });
    console.log(1)
    this.props.fetchRecipes().then( (resp) => {
      this.setState({ loading: false });
      console.log(2)
    });
    console.log('Yo!', this.state.hospitalInput)
  };

  recipes() {
    return Object.keys(this.props.searchedRecipes).map( key => this.props.searchedRecipes[key])
  };

  render() {
    console.log('rendered recipes:',this.recipes());
    return <View style={styles.container}>
      <View style={styles.formSection}>
        <TextInput style={styles.textInput}
          placeholder='Hospital'
          onChangeText={ (hospitalInput) => this.setState({hospitalInput})}
          value={this.state.hospitalInput}
        >
        </TextInput>
      </View>
      <View style={styles.buttonSection}>
        <TouchableHighlight onPress={ () => this.searchPressed() } style={styles.button}>
          <Text>Get data!!!!</Text>
        </TouchableHighlight>
      </View>
      <ScrollView style={styles.scrollSection}>
      { this.state.loading ? <Text>Loading...</Text> : null }
        {this.recipes().map(recipe => {
          return <View key={recipe.id} style={styles.rowItem}>
              <Text>Hospital: {recipe.hospital} Type: {recipe.type}</Text>
            </View>
        })}
      </ScrollView>
      </View>
  }
};

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  }
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 20
  },
  formSection: {
    padding:10,
  },
  textInput: {

  },
  buttonSection: {
    paddingVertical: 10,
    marginBottom:10,
  },
  button: {
    backgroundColor: 'beige',
    padding: 10,
  },
  scrollSection: {
    flex: 0.8,
  },
  rowItem: {
    paddingVertical: 10
  }
});

export default connect(mapStateToProps)(Home);



