import * as React from 'react'
import {Text, View, StyleSheet,TextInput} from 'react-native'

export default class ExchangeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            itemName: '',
            itemDescription: ''
        }
    }
AddItem = (itemName, itemDescription) => {
    var itemName = this.state.itemName
        db.collection("items").add({
            "Item ID":itemName,
            "Item Description": itemDescription
        })
        alert("Your item has been added!")
    }
    render(){
        return(
            <View>
                <TextInput style = {{height:100, width: 1400, border:'solid', borderColor: 'black'}}
                    placeholder = 'Item Name'
                    onChangeText = {(text)=>{
                        this.setState({
                            itemName:text
                        })
                    }}
                />
                <TextInput style = {{height:100, width: 1400, border:'solid',borderColor: 'black'}}
                placeholder = "Item Description"
                onChangeText = {(text)=> {
                    this.setState({
                        itemDescription:text
                    })
                }}
            />
                <Button title = "Add Item" color = "green" onPress = {this.AddItem()}/>
            </View>
    }
}