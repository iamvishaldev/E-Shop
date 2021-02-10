import React, { useState } from 'react';
import { StyleSheet, Text, View ,Image,TouchableOpacity,TextInput,Button} from 'react-native';
// import { Button, Item, Input, Label } from 'native-base';




function SignUp({navigation}) {
    const [emailid,setEmailId] = useState()

    const [changePassword,setChangePassword] = useState()
    return (
        // <View style={styles.container}>
        //     <View style={{ alignItems: "center", justifyContent: 'center' }}>
        //         <Image 
        //         style={{width:280,height:208}}
        //         source={require("../assets/login.jpg")}/>
        //     </View>
        //     <View style={{marginTop:50}}>
        //     <Item floatingLabel>
        //       <Label>Email Id</Label>
        //       <Input 
        //       value={emailid}
        //       onChangeText={(text)=>setEmailId(text)}
        //       />
        //     </Item>
        //     <Item floatingLabel>
        //       <Label>Password</Label>
        //       <Input 
        //       value={changePassword}
        //       onChangeText={(text)=>setChangePassword}
        //       />
        //     </Item>
        //     </View>
        //     <View  style={{marginTop:20}}>
        //     <Button full rounded success>
        //     <Text>SignUp</Text>
        //     </Button>
        //     </View>
          
        // </View>

        <View style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: 'center' }}>
            <Image 
            style={{width:280,height:208}}
            source={require("../assets/login.jpg")}/>
        </View>
        <View style={{marginTop:50}}>
          <TextInput 
          placeholder="Email Id"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6,textAlign:'center'}}
           value={emailid}
          onChangeText={(text)=>setEmailId(text)}
          /> 
          <TextInput
          placeholder="Password" 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,borderRadius:6 ,textAlign:'center'}}
          secureTextEntry={true}
          value={changePassword}
          onChangeText={(text)=>setChangePassword(text)}
          />
        </View>
        <View  style={{marginTop:20}}>
        <Button 
         title="SignUp"
         color="#841584"
         onPress={()=>navigation.navigate('Login')}
         />
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

export default SignUp;