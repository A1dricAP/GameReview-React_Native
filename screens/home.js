import React, {useState}  from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native'

export default function Home({navigation}){
    const [review, setreview]=useState([
        {
            title:'zelda', rating:5, body:'lorem ipsum', key:'1'
        },
        {
            title:'aaron', rating:4, body:'lorem ipsum', key:'2'
        },
        {
            title:'AP', rating:5, body:'lorem ipsum', key:'3'
        }
    ])

    return(
        <View style={styles.container}>
           <FlatList data={review}
           renderItem={({item})=>( //here item is the individual item of review object defined in the data prop.
            //sending item as the second parameter to be retrieved in Reviewdetails file. 
            <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}> 
                <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
           )}
           />
        </View>
    )
}

const styles=StyleSheet.create({
     container:{
        //  backgroundColor:'',
         padding:24,
     
     },
     text:{
         padding:5,
        justifyContent:'center',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        color:'#df5f67'
     }
})