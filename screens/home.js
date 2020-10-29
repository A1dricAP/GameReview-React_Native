import React, {useState}  from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm  from "./reviewForm";

export default function Home({navigation}){

    const [modalOpen, setmodalOpen]=useState(false)

    const [review, setreview]=useState([
        {
            title:'zelda', rating:5, body:'lorem ipsum', key:'1'
        },
        {
            title:'aaron', rating:4, body:'lorem ipsum', key:'2'
        },
        {
            title:'AP', rating:2, body:'lorem ipsum', key:'3'
        }
    ])
//creating this function, to add and display reviews on the home page.
    const addReview=(review)=>{
        review.key=Math.random().toString()
        setreview((currentReview)=>{
            return [review,...currentReview]
        })
        setmodalOpen(false)
    }

    return(
        <View style={styles.container}>

            <Modal visible={ modalOpen } animationType='slide'>
                <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View style={styles.modalContent}>
                <MaterialIcons
                  name='close'
                  size={24}
                  onPress={()=>setmodalOpen(false)}
                  style={styles.modalT}
            />
                    <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
            name='add'
            size={24}
            onPress={()=>setmodalOpen(true)}
            style={styles.modalToggle}
            />

           <FlatList data={review}
           renderItem={({item})=>( //here item is the individual item of review object defined in the data prop.
            //sending item as the second parameter to be retrieved in Reviewdetails file. 
            <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails', item)}> 
               <Card> 
                   <Text style={styles.text}>{item.title}</Text>
               </Card>
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
     modalContent:{
         flex:1
     },
     modalToggle:{
         marginBottom:10,
         borderWidth:1,
         borderColor:'#f2f2f2',
         padding:10,
         borderRadius:10,
         alignSelf:'center'
     },
     modalT:{
         marginTop:20,
         marginBottom:0,
         marginBottom:10,
         borderWidth:1,
         borderColor:'#f2f2f2',
         padding:10,
         borderRadius:10,
         alignSelf:'center',
        //  justifyContent:'center'
        // flexDirection:'column'
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