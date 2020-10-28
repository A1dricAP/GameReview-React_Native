import React from 'react'
import {StyleSheet, View, Text } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function header({navigation}){

    const openMenu=()=>{
        navigation.openDrawer() //this function to open the drawer on the home screen.
    }

    return(
        <View style={styles.header}>
            
            <MaterialIcons style={styles.icon} size={28} name='menu' onPress={openMenu}/>
            <View>
                <Text style={styles.headerText}>
                    GameZone 🎮
                </Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#df5f67',
        letterSpacing:1,
        // color:'#ffdb74'
    },
    icon:{
        position:'absolute',
        left:-60,
        color:'#df5f67'
    }
})