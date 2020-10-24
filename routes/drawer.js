import {createDrawerNavigator}from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeStack from './homeStack'
import aboutStack from './aboutStack'

const RootdrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeStack
    },
    About:{
        screen:aboutStack
    }
})

export default createAppContainer(RootdrawerNavigator)