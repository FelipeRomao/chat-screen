import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class Contato extends Component {   
    static navigationOptions = {
        tabBarLabel : 'Contato',
        tabBarIcon : ({focused, tintColor}) => {
            if(focused) {
                return(
                    <Image source={require('../../assets/images/contato_azul.png')} style={styles.icon} />
                )
            } else {
                return(
                    <Image source={require('../../assets/images/contato_preto.png')} style={styles.icon} />
                )   
            }
        }
    }
    
    render() {
        return(
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon : {
        width : 26,
        height : 26
    }
})