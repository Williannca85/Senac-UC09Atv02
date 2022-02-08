import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = value => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View
      style={{
        height: 40,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 50,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={5}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          
          backgroundColor: getSelectionMode == 1 ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 1 ? '#ffffff' : '#AD40AF',
            fontSize: 16, 
            fontFamily: 'Poppins-Bold'
          }}>
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={5}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 2 ? '#AD40AF' : '#e4e4e4',
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: getSelectionMode == 2 ? '#ffffff' : '#AD40AF',
            fontSize: 16, 
            fontFamily: 'Poppins-Bold'
          }}>
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}