import Icon  from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import loginlogo from "../assets/sanlam.png";
import loginimg from "../assets/business.jpg";
import { TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Alert } from 'react-native';
import { supabase } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {RadioGroup}  from 'react-native-radio-buttons-group';




const Login = ({navigation}) => {

    const[email, setEmail] =useState('')
    const[password, setPassword] =useState('')
    const [secure, setSecure] = useState(true);
    const [loading, setLoading] = useState(false)
    const [isBiometricSupported, setIsBiometricSupported] = useState(false);
    const [loadingSignup, setLoadingSignup] = useState(false)

    const changeIcon= () => {
        setSecure(!secure)
    }

    
    

    const onSubmithandler= async() =>{
        const name = {
            email: email,
            password: password
        }
        setLoading(true)
        const response = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })
    //   console.log(response)
    
      if (response?.error) Alert.alert("Invalid Email and password")
      else if(response?.data?.session?.access_token){    
        await AsyncStorage.setItem("token", response?.data?.session?.access_token);
        navigation.navigate("TabNavigation", { screen: "Dashboard" })
            }
          if (response?.error) Alert.alert("Invalid Login Credentials")
        // navigation.navigate("TabNavigation", { screen: "Dashboard" })
        setLoading(false)
    }

    const onSubmitSignup= async() =>{
        // console.log('signup')
        const name = {
            email: email,
            password: password
        }
        setLoadingSignup(true)
        const response = await supabase.auth.signUp({
            email: email,
            password: password,
          })
          console.log(response)
          if(response?.data?.user?.aud == 'authenticated') Alert.alert('Verify your email ')
        //   if (response?.error) Alert.alert("Invalid Email and password")
          else if(response?.data?.session?.access_token){
            navigation.navigate("TabNavigation", { screen: "Dashboard" })        }
        // navigation.navigate("TabNavigation", { screen: "Dashboard" })
        setLoadingSignup(false)
    }

    return(
        <View style={styles.body}>
            <ImageBackground source={loginimg} resizeMode="cover" style={styles.child}>
                <View style={styles.coverchild}>
                <View style={styles.logininfo}>
                <Image source={loginlogo} style={styles.loginlogo} />
                <Text style={styles.signin}>Sign In</Text>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Email</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput style={styles.emailinput} value={email} onChangeText={setEmail} placeholder="Input your email" />
                    </View>
                </View>
                <View style={styles.inputemailtog}>
                    <Text style={styles.emailtog}>Password</Text>
                    <View style={styles.emailinputhold}>
                    <TextInput secureTextEntry={secure} value={password} onChangeText={setPassword} style={styles.emailinput}/>
                    <Icon style={{ paddingRight: 15, color: "black", height:30, width:25, paddingTop: 10 }}
name={secure ? "eye" : 'eye-slash'}
size={20} color='gray' onPress={changeIcon}/>
                    </View>
                </View>
                {/* <View>
                    <RadioGroup  radioButtons={radioButtons} 
            onPress={onPressRadioButton}  />
                </View> */}
                {/* <TouchableOpacity style={{ backgroundColor: '#1E6738', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }} onPress={pressHandler}> */}
                <TouchableOpacity onPress={onSubmithandler} style={{ backgroundColor: '#0074c8', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }}>
                {loading?  <ActivityIndicator animating={true} color="white" />: <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20}}>Sign in</Text>}
                </TouchableOpacity>

                <TouchableOpacity onPress={onSubmitSignup} style={{ backgroundColor: '#0074c8', width: "90%", marginTop: 30, padding: 8, borderRadius: 5 }}>
                {loadingSignup?  <ActivityIndicator animating={true} color="white" />: <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20}}>Sign Up</Text>}
                </TouchableOpacity>
                {/* <Text> {isBiometricSupported ? 'Your device is compatible with Biometrics' 
                        : 'Face or Fingerprint scanner is available on this device'}
                            </Text> */}
            </View>
                </View>
                </ImageBackground>
            
        </View>
    )
}

const styles= StyleSheet.create({
    body: {
        flex: 1
    },
    networks: {
        flexDirection:"row",
        marginTop: 40,
        justifyContent: "space-evenly",
        width: "100%"
    },
    signup: {
        color: "#1E6738"
    },
    notyet: {
        flexDirection: "row",
        marginTop: 40
    },
    notmember: {
        color: "#5F6160"
    },
    child:{
        // width: "100%",
        // height: "55%"
        flex: 1
    },
    coverchild: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: "100%",
    height: "100%"
    },
    logininfo: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    signin: {
        color: "#0074c8",
        fontSize: 30
    },
    loginlogo :{
        marginBottom: 10
    },
    emailinputhold:{
        backgroundColor: "#DCDCDC",
        borderRadius: 5,
        flexDirection: "row"
    },
    inputemailtog:{
        width: "90%",
        marginTop: 30
    },
    emailinput:{
        fontSize:18,
        padding: 10,
        flex: 1
    },
    emailtog: {
        color: "#0074c8",
        fontWeight: "600"
    }
})

export default Login;