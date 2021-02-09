import React,{useState} from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import { Button, Item, Input, Label } from 'native-base';




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
            <Item floatingLabel>
              <Label>Email Id</Label>
              <Input 
              value={email}
              onChangeText={(text)=>setEmail(text)}
              
              />
              console.warm(text);
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input 
              secureTextEntry={true}
              value={Password}
              onChangeText={(text)=>setPassword(text)}
              />
            </Item>
            </View>
            <View  style={{marginTop:20}}>
            <Button full rounded success
            onPress={()=>navigation.navigate('Product')}
            >
            <Text>Login</Text>
            </Button >
            <TouchableOpacity style={{marginTop:10}}>
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