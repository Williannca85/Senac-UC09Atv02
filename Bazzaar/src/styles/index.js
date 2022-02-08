/* eslint-disable prettier/prettier */
import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        flex: 1,
        zIndex: 0,
    },
    contentContainer:{
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title:{
        fontSize: 40,
        marginLeft: 30,
        marginVertical: 20,
        width: '100%',
        color:'#d28aba',
        
    },
    line:{
        height: 1,
        width: '90%',
        backgroundColor: '#D1D1D1',
        marginVertical: 20
    },
    image:{
        height: 300,
        width: width - 10,
    },
    thumb:{
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'#dec1bb',
        paddingHorizontal: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        top: '30%',
        left: '10%'
    },
    buy:{
        position: 'absolute',
        top:0,
        zIndex: 1,
        height: 300,
        width: width - 10,
        backgroundColor: 'rgba(0,0,0,0.3)', 
    },
    off:{
        fontSize: 20,
        color: 'white',
        top: '15%',
        left: '4%'
    },
    comprar:{
        fontSize: 18,
        color: '#ffffff'
    },

        linearGradient: {
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 5
        },

});

export default styles