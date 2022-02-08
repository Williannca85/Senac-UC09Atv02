/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#d28aba',
        width: '100%',
        paddingVertical: 10,
        flexDirection:'row',
    },
    header:{
        width: '100%',
        backgroundColor: 'orange'
    },
    input: {
        backgroundColor: 'white',
        height: 25,
        borderRadius: 20,
        paddingVertical: 0,
        width:'100%',
        paddingLeft: 10,
    },
    view:{
        flexDirection:'row',
        width: '80%',
        marginHorizontal: 5
    },
    icon:{
        position: 'absolute',
        right: 5
    },
});

export default styles