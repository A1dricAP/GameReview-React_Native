import {createDrawerNavigator}from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import HomeStack from './homeStack'
import aboutStack from './aboutStack'

//encapsulating the StackNavigator in this Drawer Navigator.
const RootdrawerNavigator=createDrawerNavigator({
    Home:{
        screen:HomeStack //using stack navigator.
    },
    About:{
        screen:aboutStack //using stack navigator.
    }
})

export default createAppContainer(RootdrawerNavigator)