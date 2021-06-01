import * as React from 'react'
import {Text, View, StyleSheet, TextInput, Button, KeyboardAvoidingView} from 'react-native'
import {Header} from 'react-native-elements'
import firebase from 'firebase'

export default class BarterDonate extends React.Component{
    constructor(){
        super()
        this.state = {
            userID:firebase.auth().currentUser.email, 
            nameOfItem:'',
            reasonForRequest:'',
        }
    }
    createUniqueID(){
        return Math.random().toString(36).substring(7)
    }
    render(){
        return(
            <View>
                <Header
                centerComponent = {{text:'Barter Donate', style: {fontSize:40, fontweight: 'bold', color: 'green'}}}/>
                <KeyboardAvoidingView>
                    <TextInput
                    placeholder = 'Barter Donate'
                    onChangeText = {(text)=>{
                        this.setState({
                            nameOfItem:text
                        })
                    }}/>

                </KeyboardAvoidingView>
            </View>
        )
    }
}