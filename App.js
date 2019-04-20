import React, { Component } from 'react'
import { View, ImageBackground, Text, FlatList, StyleSheet, Platform } from 'react-native'

import MsgItem from './src/MsgItem'

export default class Chat extends Component {
  
  static navigationOptions = {
    title : 'Nara' 
  }

  constructor(props) {
    super(props)
    this.state = {
      chat : [
        {key : '1', nome : 'Felipe', msg : 'Olá, tudo bem?', m: true}, 
        {key : '2', nome : 'Nara', msg : 'Opa, tudo beleza e com você?', m: false}, 
        {key : '3', nome : 'Felipe', msg : 'Eu vou bem, graças a Deus e como vai as coisas?', m: true}, 
        {key : '4', nome : 'Nara', msg : 'Vai muito bem, estudando bastante rsrsrs', m: false}, 
        {key : '5', nome : 'Felipe', msg : 'Tá certo, assim que é bom!', m: true}, 
        {key : '6', nome : 'Nara', msg : 'Nem sempre rsrsrs hoje mesmo é dia de relaxar!', m: false}, 
        {key : '7', nome : 'Felipe', msg : 'Concordo plenamente, a vida não pode ser so estudar ou trabalhar', m: true}, 
        {key : '8', nome : 'Nara', msg : 'Verdade e você o que está arrumando ai?', m: false}, 
        {key : '9', nome : 'Felipe', msg : 'Já sabe rsrsrs programando para variar', m: true}, 
      ]
    }
  }
  
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
          <FlatList 
            data={this.state.chat}
            renderItem={({item}) => <MsgItem data={item} />}
          />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    marginTop : (Platform.OS == 'ios') ? 20 : 0
  },

  chat : {
    flex : 1
  }
})