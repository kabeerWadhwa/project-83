import * as React from 'react'
import {Text, View, StyleSheet, TextInput, Button, Modal, ScrollView, KeyboardAvoidingView} from 'react-native'
import firebase from 'firebase'
import db from '../config'

export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailID: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            contactNumber: '',
            confirmPassword: '',
            isModalVisible: 'false'
        }
    }
    userSignUp = (emailID, password, confirmPassword) => {
        if(password !== confirmPassword){
            alert("Password does not match, please try again!")
        }
        firebase.auth().createUserWithEmailAndPassword(emailID, password)
        .then((userCredential) => {
            db.collection("users").add({
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                contactNumber:this.state.contactNumber,
                address:this.state.address,
                emailID:this.state.emailID
            })
        alert("You have been signed up",
        '',
        [{
            text:'ok',onPress:()=> this.setState({
                "isModalVisible":false
            })
        }])
        //var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Please try again")
  });
    }
    userLogin = (emailID,password) => {
        firebase.auth().signInWithEmailAndPassword(emailID, password)
        .then(() => {
            this.props.navigation.navigate('BarterDonate')
        alert("You have been logged in")
        //var user = userCredential.user;
        // ...
  })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Account not found, please try again")
  });
    }
    showModal = () => {
        return(
            <Modal
            animationType = "fade"
            transparent = {true}
            visible = {this.state.isModalVisible}
            >
            <View>
               <ScrollView>
                <KeyboardAvoidingView>
                <Text>Sign Up Form</Text>
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'First Name'
                maxLength = {20}
                onChangeText = {(text)=>{
                    this.setState({
                        firstName:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Last Name'
                maxLength = {20}
                onChangeText = {(text)=>{
                    this.setState({
                        lastName:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Contact Number'
                maxLength = {10}
                keyboardType = 'numeric'
                onChangeText = {(text)=>{
                    this.setState({
                        contactNumber:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Email'
                keyboardType = 'email-address'
                onChangeText = {(text)=>{
                    this.setState({
                        emailID:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Address'
                multiline = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        address:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Password'
                secureTextEntry = {true}
                onChangeText = {(text)=> {
                    this.setState({
                        password:text
                    })
                }}
                />
                <TextInput style = {Styles.TextInputStyle}
                placeholder = 'Confirm Password'
                secureTextEntry = {true}
                onChangeText = {(text)=>{
                    this.setState({
                        confirmPassword:text
                    })
                }}
                />
                <Button title = 'Register' color = "green" onPress = {()=>{
                    this.userSignUp(this.state.emailID, this.state.password, this.state.confirmPassword)
                }}
                />
                <Button title = 'Cancel' color = "red" onPress = {()=>{
                    this.setState({"isModalVisible": false})
                }}/>
                </KeyboardAvoidingView>
                </ScrollView> 
            </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                {this.showModal()}
            <Text style = {{fontSize: 45, fontWeight: 'bold', color: 'red'}}>Barter System</Text>
            <TextInput style = {{height: 50, width: 300, color: 'black', border: 'solid'}}
            placeholder = 'Email'
            keyboardType = 'email-address'
            onChangeText = {(text)=>{
                this.setState({
                    emailID:text
                })
            }}
            />
            <TextInput style = {{height: 50, width: 300, color: 'black', border: 'solid'}}
            placeholder = 'Password'
            secureTextEntry = {true}
            onChangeText = {(text)=>{
                this.setState({
                    password:text
                })
            }}
            />
            <Button title = 'Login' color = "red" onPress = {()=> {
                this.userLogin(this.state.emailID, this.state.password)
            }}/>
            <Button title = 'Sign Up' color = "green" onPress = {()=> {
                this.userSignUp(this.state.emailID, this.state.password)
            }}/>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    TextInputStyle:{
        height: 75,
        width: 300, 
        color: 'black', 
        border:'solid'
    }
})