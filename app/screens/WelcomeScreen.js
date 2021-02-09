import React from 'react';
import {ImageBackground,StyleSheet,View,Image,Text,Button} from 'react-native';
import SignUp from '../components/SingUp'
import Login from '../components/Login'



function WelcomeScreen({navigation}) {
    return (
      <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      >
          <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/shop.jpg")} />
          <Text style={styles.logoText}>Ecommerce Cloth Store</Text>
          </View>
          <View style={styles.btnContainer}>
              <View style={{margin:5}}>
                <Button style={styles.loginButton} onPress={()=>navigation.navigate('Login')} title="Login" />  
              </View>
              <View style={{margin:5}}>
              <Button style={styles.SignUpButton} onPress={()=>navigation.navigate('SignUp')} title="SignUp" />
              </View>
          </View>
          
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:"center"
    },
    logo:{
        width:200,
        height:200,
        borderRadius:100
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    logoText:{
        top:20,
    },
    btnContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:"center",
        
    },
    loginButton:{
       
    },
    SignUpButton:{

    }
})

export default WelcomeScreen;