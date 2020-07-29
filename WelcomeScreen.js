import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class WelcomeScreen extends Component
 {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('Your response submitted')
   }
   render() {
      return (
         <View style = {styles.container}>
            <Text style = {{justifyContent: 'center',textAlign: 'center', color: '#9a73ef',fontWeight: 'bold',fontSize: 20}}> Welcome to The Barter System App !! </Text>
            <Text style = {{paddingTop: 15 ,justifyContent: 'center',textAlign: 'center', color: '#9a73ef',fontWeight: 'bold',fontSize: 15}}> Please type your email and password </Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = '#9a73ef'
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = '#9a73ef'
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Text></Text>
         </View>
      )
   }
}
export default WelcomeScreen

const styles = StyleSheet.create({
   container: {
      paddingTop: 225,
  justifyContent: 'center',
paddingBottom: 240,
      backgroundColor : 'orange',

   },


   input: {
      paddingTop  :10,
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      textAlign: 'center',
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})