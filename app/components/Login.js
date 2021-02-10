import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button} from 'react-native';
// import { Button, Item, Input, Label } from 'native-base';
// import { TextInput,Button } from 'react-native-paper';




function Login({navigation}) {

    const [email,setEmail] = useState("");
    
    const [Password,setPassword] = useState("")



    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                <Image 
                style={{width:280,height:208}}
                source={require("../assets/login.jpg")}/>
            </View>
            <View style={{marginTop:50}}>
              <TextInput 
              placeholder="Email Id"
              style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6 ,textAlign:'center'}}
               value={email}
              onChangeText={(text)=>setEmail(text)}
              /> 
              <TextInput
              placeholder="Password" 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6 ,textAlign:'center'}}
              secureTextEntry={true}
              value={Password}
              onChangeText={(text)=>setPassword(text)}
              />
            </View>
            <View  style={{marginTop:20}}>
            <Button 
             title="Login"
             color="#841584"
             onPress={()=>navigation.navigate('Product')}
             />
            <TouchableOpacity style={{marginTop:10}} onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={{ textAlign: "center",fontSize:20 }}>don't have an account ?</Text>
            </TouchableOpacity>
            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        justifyContent:"flex-start",
        padding:50
    }
})

export default Login;