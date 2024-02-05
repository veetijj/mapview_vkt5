import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Picker } from '@react-native-picker/picker';

export default function Settings(props) {
    return (   
        <View style={StyleSheet.settignsArea}>
            <Text style={styles.heading}>Map type</Text>
            <Picker selectedValue={selectedType} onValueChange={(itemValue) => {
                setSelectedType(itemValue)
                props.setMapType(itemValue)
            }}>
                <Picker.Item label="Standard" value="standard" />
                <Picker.Item label="Satellite" value="satellite" />
                <Picker.Item label="Terrain" value="terrain" />
            </Picker>

        </View>
    )
}

const styles = StyleSheet.create({
    settingsArea: {
        marginTop: 32,
        marginLeft: 16
    },
    heading: {
        textTransform: 'uppercase',
    }
})