import React from 'react';
import {  StyleSheet,Text,TouchableOpacity, View,Image,Platform } from 'react-native';
import {Avatar, Button, Card ,Title, Paragraph } from 'react-native-paper';




function Cart({route,navigation}) {
   let cartData = route.params
   console.log(cartData);
    return (
        // <View style={styles.container}>
        //     <View>

        //     </View>
        //     <View>
        //        <Image 
        //        style={{width:155,height:200}}
        //        source={{uri : cartData}}
        //        />
        //     </View>
        
        // </View>
        <Card style={styles.container}>
    <Card.Title title="CART"  />
    <Card.Content>
    </Card.Content>
    <Card.Cover source={{ uri: cartData }} />
    <Card.Actions>
      <Button  style={{marginTop:10}} mode="contained" onPress={()=>alert('Congrats Payment Done')}>PAY</Button>
    </Card.Actions>
    <Button style={{marginTop:10}} mode="contained" onPress={()=>navigation.navigate('Login')}>
    SignOut
  </Button>
  </Card>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === "android" ? 40 : 0,
    },
    imageStyle:{
        width:305,
        height:205,
        borderRadius:20
    }
})

export default Cart;