import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { version } from 'react/cjs/react.production.min';
import { Novidades, Promocoes } from '../model/data';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({imagem, titulo, subtitulo, Novo, valor, onPress}) {
  return (

    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>

        <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
          <Image
            source={imagem}
            style={{width: 60, height: 60, borderRadius: 10, marginRight: 20}}
        />

        <View style={{width: windowWidth - 230}}>
          <Text
            style={{
              color: '#0e105c',
              fontFamily: 'Poppins-Bold',
              fontSize: 16,
              
            }}>
            {subtitulo}
          </Text>
          
          <Text
            numberOfLines={1}
            style={{
              color: '#0e105c',
              fontFamily: 'Poppins-Bold',
              fontSize: 18,
            /*   textTransform: 'uppercase', */
            }}>
            {titulo}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={{
        backgroundColor:'#0aada8aa',
        padding:15,
        width: 100,
        borderRadius: 10,
      }}>

        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Poppins-Bold',
          fontSize: 14,
        }}>
          {Novo == 'Yes' && 'Ver'}
          {Novo == 'No' && valor}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
