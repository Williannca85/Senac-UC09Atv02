import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const ProfileScreen = () => {
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

    }}>
        Perfil
    </Text>
  </View>
 

{/*     <TouchableOpacity 
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

export default ProfileScreen
