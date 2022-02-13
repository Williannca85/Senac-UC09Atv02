import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const CategoryScreen = () => {
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
        Categoria
    </Text>
  </View>
  </SafeAreaView>
</LinearGradient>
)

}

export default CategoryScreen
