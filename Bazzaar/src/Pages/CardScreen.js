import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const CardScreen = () => {


return (

      <LinearGradient 
        style={{
        height: '100%', 
        width: '100%', 
        }}

        start={{x:0,y:1}}
        end={{x:1,y:0}}
          locations={[.5,1,1.5]}
        colors={['#d5a5c5','#f9ccba','#94d7ee']}>

    <SafeAreaView style={{flex:1 , justifyContent: 'center', alignItems: 'center'}}>

    <View>
     <Text style={{
       fontSize: 40, 
       color:'#21315f', 
       fontFamily: 'Poppins-MediumItalic',
       marginVertical: 40,

      }}>
          BaZzAaR
      </Text>
    </View>
   
    <View 
            style={{
                 alignItems: 'center',
                 flex:1
            }}>
                <Text 
                style={{
                    fontSize: 20,
                    marginVertical: 40,
                    }}>Aceitamos diversos tipos de cartões</Text>
                <View 
            style={{
               width:'70%',
               flexDirection:'row',
               justifyContent: 'space-around'
            }}>
                    <Icon name="cc-visa" size={60} color="rgb(0,76,143)"/>
                    <Icon name='cc-mastercard' size={60} color='#b03a30'/>
                    <Icon name='cc-amex' size={60} color='#A4C1A9'/>
                </View>
                <View 
            style={{
               width:'70%',
               flexDirection:'row',
               justifyContent: 'space-around'
            }}>
                    <Icon name='cc-paypal' size={60} color='rgb(36,42,94)'/>
                    <Icon name='cc-diners-club' size={60} color='rgb(0,98,161)'/>
                    <Icon name='cc-discover' size={60} color='rgb(235,124,44)'/>
                </View>

                <Text 
                style={{
                    fontSize: 20,
                    marginVertical: 40,
                    }}>
                         Ou pague pelo QRCode
                         </Text>
            
                         <Icon name='qrcode' size={80} color='rgb(0,0,0)'/>

            </View>

      {/* <TouchableOpacity 
         onPress={() => navigation.navigate('Login')}
      style={{
        backgroundColor:'#ad40af', 
        padding:10, 
        width: '90%', 
        borderRadius:10, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        }}>
            <Text
            style={{
              fontSize:30, 
              color:'#ffffff',
              fontFamily: 'Poppins-MediumItalic'
            }}>
              Vamos as Compras</Text>
              <Icon name="shopping-cart" size={35} color="#fff" />
      </TouchableOpacity> */}
    </SafeAreaView>
  </LinearGradient>
  ) 
   }



export default CardScreen