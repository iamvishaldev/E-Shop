import React from 'react';
import {  StyleSheet,Text,TouchableOpacity, View,Image } from 'react-native';


function ProductDetail({props}) {
    return (
        <View style={styles.container}>
            {/* <Image source={props.urls} style={{width:50,height:50}} /> */}
                     <Text>ProductDetails</Text>     
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffff'
    }
})

export default ProductDetail;