import React from 'react'
import {StyleSheet, View, Text, Image, ImageBackground } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function header({navigation}){

    const openMenu=()=>{
        navigation.openDrawer() //this function to open the drawer on the home screen.
    }

    return(
        <View style={styles.header}>
            
            <MaterialIcons style={styles.icon} size={28} name='menu' onPress={openMenu}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
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
    headerTitle:{
        flexDirection:'row'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#df5f67',
        letterSpacing:1,
        // color:'#ffdb74'
    },
    headerImage:{
        width:26,
        height:26,
        marginHorizontal:10
    },
    icon:{
        position:'absolute',
        left:-40,
        color:'#df5f67'
    }
})