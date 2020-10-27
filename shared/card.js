import React from 'react'
import {StyleSheet, View} from 'react-native'

export default function card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {/* whenever we declare this component elsewhere,
                whatever object we nest in the object, will become a prop,
                followed by being a child. */}

                {/* for instance, if we declare component
                <Card>
                <Text></Text>  <-- this becomes the prop being passed into this component at the beginning. 
                </Card> */}
                {props.children}  
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:"#fff",
        shadowOffset:{
            width:1, height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:4,
        marginVertical:6
    },
    cardContent:{
        marginHorizontal:18,
        marginVertical:20
    }
})