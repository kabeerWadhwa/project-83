import * as React from 'react'
import {Text, View, StyleSheet, ScrollView, Alert, TextInput, TouchableOpacity, Button} from 'react-native'
import {Header, Icon} from 'react-native-elements'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import db from '../config'
import firebase from 'firebase'

export default class SettingsScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailID:'',
            firstName:'',
            lastName:'',
            contactNumber:'',
            address:'',
            docID:''
        }
    }
    getData = () => {
        var emailID = firebase.auth().currentUser.email
        db.collection("users").where('emailID','==',emailID).get().then(SnapShot => {
            SnapShot.forEach(doc => {
                var data = doc.data()
                    this.setState({
                        emailID:data.emailID,
                        firstName:data.firstName,
                        lastName:data.lastName,
                        contactNumber:data.contactNumber,
                        address:data.address,
                        docID:doc.id
                    })
            })
        })
    }
    updateData = () => {
        db.collection('users').doc(this.state.docID).update({
            "FirstName":this.state.firstName,
            "LastName":this.state.lastName,
            "Address":this.state.address,
            "ContactNumber":this.state.contactNumber
        })
        alert("Your profile has been updated!")
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
        <SafeAreaProvider>
          <View>
              <Header
              leftComponent = {<Icon name = "menu" onPress ={()=>{
                  this.props.navigation.toggleDrawer()
              }}/>}
              centerComponent = {{text: 'Settings', style: {color: 'green', fontSize: 40, fontWeight: 'bold'}}}/>
              <TextInput style = {{width: 1450, height:50, color: 'black', border: 'solid'}}
              placeholder = "First Name"
              onChangeText = {(text)=>{
                this.setState({
                    firstName:text
                })
              }}/>
              <TextInput style = {{width: 1450, height: 50, color: 'black', border: 'solid'}}
              placeholder = "Last Name"
              onChangeText = {(text)=>{
                  this.setState({
                      lastName:text
                  })
              }}/>
              <TextInput style = {{width: 1450, height: 50, color: 'black', border: 'solid'}}
              placeholder = "Contact Number"
              keyboardType = "numeric"
              onChangeText = {(text)=>{
                  this.setState({
                      contactNumber:text
                  })
              }}/>
              <TextInput style = {{width: 1450, height: 50, color: 'black', border: 'solid'}}
              placeholder = "Address"
              multiline = {true}
              onChangeText = {(text)=>{
                  this.setState({
                      address:text
                  })
              }}/>
              <Button title = "Save" color = "red" onPress = {()=>{
                  this.updateData()
              }}/>
          </View>
        </SafeAreaProvider>
        )
    }
}