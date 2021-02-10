import React from 'react';
import {  StyleSheet,Text,TouchableOpacity, View,Image,Button } from 'react-native';
import { Appbar,  Title } from 'react-native-paper';


function ProductDetail({route,navigation}) {

     let productDetail = route.params

     let cartData = productDetail.urls

    return (
        <View style={styles.container}>
            {/* <Image source={props.urls} style={{width:50,height:50}} /> */}
                     {/* <Text>{productDetail.desc}</Text> */}
                  <View style={styles.ImageStyle}>
                        <Image 
                        style={styles.ImageView}
                        source={{ uri: productDetail.urls }}
                        
                        />
                    <View>
                        <Title style={{textAlign:"center",marginTop:10}}>PRODUCT DESCRIPTION</Title>
                        <Text style={{textAlign:"center",margin:20,fontSize:25}}>{productDetail.desc}</Text>
                    </View>
                    <View>
                        <Button title="Add To Cart" onPress={()=>navigation.navigate('Cart',cartData)}/>
                    </View>
                  </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
         backgroundColor:'#e7e6e1',
        alignItems:"center",
        justifyContent:"center"
    },
    ImageStyle:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    ImageView:{
        width:305,
        height:205,
        borderRadius:20
       
    }
})

export default ProductDetail;