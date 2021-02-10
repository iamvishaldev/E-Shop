
import React, { useState } from 'react';
import {  StyleSheet,Text,TouchableOpacity, View,Image,Button, TextInput,Platform} from 'react-native';


// function ProductList(props) {
//     return (
//         <View style={styles.container}>
//           <TouchableOpacity>
//             <View style={styles.imgStyle} >
//                 <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/shirt1.jpg")}/>
//                 {/* <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/tshirt2.jpg")}/>
//                 <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/shirt3.jpg")}/> 
//                 <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/tshirt4.jpg")}/>
//                 <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/cloth5.jpg")}/>
//                 <Image style={{width:'43%',height:'30%',margin:10}} source={require("../assets/cloth6.jpg")}/> */}
//             </View>
//         </TouchableOpacity> 
//         </View>
//     );
// }

function ProductList({navigation}){

const [value,setValue] = useState("")

const [ cardData,setResults] = useState([])

const [imageData,setImageData] = useState([])



//  AK =SR3PuDaEbJV6epzzhoqZUEdC3fn6r5nZHEmywmuzvOc

// SK=DEbJU6pFDImTJGkS_mBQ5XU0EaWrZG9mSBXAm-zxTbg

// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

    const [productDetail,setProductDetail] = useState({
        id:'12345',
        urls:'',
        desc:'nnnn'
    })

    const getImageData = (id,urls,desc)=>{
        // console.log(id,urls,desc)
        // alert(desc)
        //   id={id}
        //   urls={urls}
        //   desc={desc}   
        setProductDetail({
            id,
            urls,
            desc
        })
        // alert(desc);

        navigation.navigate('ProductDetail',productDetail)

    }
 
    //  let data = {id,urls,desc};


    const fetchImage = () =>{
        fetch(`https://api.unsplash.com/search/photos?client_id=SR3PuDaEbJV6epzzhoqZUEdC3fn6r5nZHEmywmuzvOc&query=${value}&orientation=landscape&per_page=6`)
        .then(res=>res.json())
        .then(data=>{
            setResults(data.results)
            // console.log(data.results);
        })
    }

    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <TextInput
                value={value}
                style={{width:'60%',height:45,borderRadius:10,borderWidth:1,borderColor:"grey"}}
                onChangeText={(text=>setValue(text))}
                />
                <Button 
                title="Search"
                color="#841584"
                onPress={()=>fetchImage()}
                />
            </View>
            <View style={styles.imageGallery} >
                {
                    cardData.map(item=>{
                        return (
                        <View key={item.id} 
                        
                        >
                        <TouchableOpacity   
                        onPress={()=>getImageData(item.id,item.urls.small,item.alt_description)}
                       
                    //    onPress={()=>navigation.navigate('ProductDetail',productDetail)}
                        >
                        <View>
                        <Image  
                        key={item.id} 
                        source={{uri:item.urls.small}}
                        style={{width:165,height:175,margin:5,}}
                        />
                        </View>
                      
                        </TouchableOpacity>
                        </View>
                        
                        )
                    })
                }
            </View>
           
        </View>
    )
}


const styles = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     backgroundColor: '#ffff',
    //     margin:15,
    //     marginLeft:15,
    //     padding:5,
    //     justifyContent:"space-evenly"
    // },
    // imgStyle:{
    //     display:"flex",
    //     flexWrap:"wrap",
    //     justifyContent:"space-around",
        
    // }

    container:{
        flex:1,
        backgroundColor:"#ffff",
        paddingTop:Platform.OS === "android" ? 30 : 0,

        
    },
    imageGallery:{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around"
    },
})


export default ProductList;