import React, { Component } from 'react'
import { View, FlatList, StyleSheet, Image, Text} from 'react-native'

export default class HomeProducts extends Component {   
    static navigationOptions = ({navigation}) => ({
        title : navigation.state.params.title,
        tabBarLabel : 'Home',
        tabBarIcon : ({focused, tintColor}) => {
            if(focused) {
                return(
                    <Image source={require('../../assets/images/home_azul.png')} style={styles.icon} />
                )
            } else {
                return(
                    <Image source={require('../../assets/images/home_preto.png')} style={styles.icon} />
                )   
            }
        }
    })

    constructor(props) {
        super(props)
        this.state = {
            list : props.navigation.state.params.products
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <ItemProduto data={item} />}
                />
            </View>
        )
    }
}

class ItemProduto extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        return(
            <View style={styles.productsItem}>
                <Image resizeMode='contain' source={this.props.data.img} style={styles.productImage} />
                <Text style={styles.productName}>{this.props.data.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#EEEEEE'
    },
    
    icon : {
        width : 26,
        height : 26
    },

    productsItem : {
        height : 100,
        backgroundColor : '#FFFFFF',
        margin : 10,
        borderRadius : 10,
        padding : 10,
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center'
    },

    productImage : {
        width : 150 ,
        height : 80
    },

    productName  :{
        fontSize : 17,
        fontWeight : 'bold'
    }
})