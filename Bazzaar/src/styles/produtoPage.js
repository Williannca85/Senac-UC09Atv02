import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex:1,
        width: '100%',
    },
    nome:{
        fontSize: 25
    },
    preco:{
        fontSize: 18,
        color: 'green'
    },
    buttons:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 5,
    },
    main:{
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom:0,
        backgroundColor: '#d3e0dc',
        paddingVertical: 5,
    },
    backButton:{
        backgroundColor: '#c4c4c4',
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buyButton:{
        backgroundColor: '#4f95d6',
        paddingVertical: 3,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttonText:{
        fontSize: 15
    }
})

export default styles