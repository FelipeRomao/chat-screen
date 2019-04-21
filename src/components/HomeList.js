import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableHighlight } from 'react-native'

export default class HomeList extends Component {   
    static navigationOptions = {
        title : 'Restaurante Dona Nega',
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
    }

    constructor(props) {
        super(props)
        this.state = {
            list : [
                {
                    key : '1',
                    title : 'Prato Executivo',
                    img : require('../../assets/images/tipos/pe.png'),
                    description : 'Pratos já prontos para comer',
                    bg : '#e35339',
                    products : [
                        {key : '1', name : 'Prato de Frango', img : require('../../assets/images/cardapio/pe/executivos_frang_.png')},
                        {key : '2', name : 'Prato de Peixe', img : require('../../assets/images/cardapio/pe/executivos_peix_.png')},
                        {key : '3', name : 'Prato de Picanha', img : require('../../assets/images/cardapio/pe/executivos_picanh_.png')}
                    ]
                },

                {
                    key : '2',
                    title : 'Saladas',
                    img : require('../../assets/images/tipos/saladas.png'),
                    description : 'Pratos saudáveis para você.',
                    bg : '#a6bb24',
                    products : [
                        {key : '1', name : 'Salada de Frango', img : require('../../assets/images/cardapio/saladas/salada-fr.png')},
                        {key : '2', name : 'Salada Água Doce', img : require('../../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {key : '3', name : 'Salada Salmão', img : require('../../assets/images/cardapio/saladas/salada_salma.png')}
                    ]
                },

                {
                    key : '3',
                    title : 'Bebidas',
                    img : require('../../assets/images/tipos/bebidas.png'),
                    description : 'Refrescos para voce.',
                    bg : '#079ed4',
                    products : [
                        {key : '1', name : 'Caipirosca', img : require('../../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {key : '2', name : 'Cookie Cream', img : require('../../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {key : '3', name : 'Morango GD', img : require('../../assets/images/cardapio/bebidas/morango_gd.png')},
                        {key : '4', name : 'Prata', img : require('../../assets/images/cardapio/bebidas/patra.png')},
                        {key : '5', name : 'Suco Fitness', img : require('../../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                    ]
                },

                {
                    key : '4',
                    title : 'Sobremesas',
                    img : require('../../assets/images/tipos/sobremesa.png'),
                    description : 'Sobremesas para voce.',
                    bg : '#fcb81c',
                    products : [
                        {key : '1', name : 'Brownie', img : require('../../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {key : '2', name : 'Creme Papaya', img : require('../../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {key : '3', name : 'Delicia Gelada', img : require('../../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')}
                    ]
                }
            ]
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
               <FlatList 
                    data={this.state.list}
                    renderItem={({item}) => <Cardapio data={item} navigation={this.props.navigation}/>}
               />
            </View>
        )
    }
}

class Cardapio extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.click = this.click.bind(this)
    }

    click() {
        this.props.navigation.navigate('HomeProducts', {title : this.props.data.title ,products : this.props.data.products})
    }
    
    render() {
        return(
            <TouchableHighlight style={[styles.listaItem, {backgroundColor : this.props.data.bg}]} 
            underlayColor='#CCCCCC' onPress={this.click}>
                <View style={[styles.listaItem, {backgroundColor : this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.listaImagem} />
                    <View>
                        <Text style={styles.titleItem}>{this.props.data.title}</Text>
                        <Text style={styles.descriptionItem}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50
    },
    
    icon : {
        width : 26,
        height : 26
    },

    listaItem : {
       height : 100,
       flex : 1,
       alignItems : 'center',
       flexDirection : 'row'
    },

    listaImagem : {
        width : 64,
        height : 64,
        marginLeft : 15,
        marginRight : 20
    },

    titleItem : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#FFFFFF'
    },

    descriptionItem : {
        fontSize : 15,
        fontWeight : 'bold'
    }
})