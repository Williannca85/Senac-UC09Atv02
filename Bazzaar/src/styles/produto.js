import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    subtitle:{
        fontSize: 25,
        width: '100%',
        marginVertical: 15,
        textAlign: 'center'
    },
    moda:{
        alignItems: 'center',
        borderColor: '#E5e5e5',
        borderWidth: 1,
    },
    produto:{
        backgroundColor: '#c4c4c4',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E5e5e5',
    },
    roupa:{
        maxHeight: height,
        width: width - 70
    },
    last:{
        color:'red',
        textDecorationLine:'line-through'
    },
    now:{
        color:'green'
    },
    novo:{
        position: 'absolute',
        zIndex:1,
        backgroundColor:'#3bccb9',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        top:15,
        left: 15,
        fontSize: 20
    }
})

export default styles