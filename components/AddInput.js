import React, { useState, useEffect } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const MAX_LENGTH = 500;

export const AddInput = ({ addTodo }) => {
    const [data, setData] = useState('');
    const [countSymbols, setCountSymbols] = useState(0);

    useEffect(() => {
        setCountSymbols(data.length)
    }, [data])
    
    const pressBtn = () => {
        if (!data.trim()) return
        addTodo(data);
        setData('');
    }
    
    return (
        <View style={styles.addInput}>
            <View style={{width: '80%'}}>
                <TextInput 
                    style={styles.input}
                    placeholder='Введите текст...'
                    onChangeText={setData}
                    value={data}
                    autoCorrect={false}
                    maxLength={MAX_LENGTH}
                />
                <Text style={{color: 'white'}}>Кол-во символов: {countSymbols}/{MAX_LENGTH}</Text>
            </View>
            <TouchableOpacity 
                style={styles.btn} 
                onPress={pressBtn}
                activeOpacity={0.7}
            >
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    addInput: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        width: '100%',
    },

    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        height: 50,
        padding: 5,
        marginRight: 5,
    },

    btn: {
        height: 50,
        backgroundColor: '#1DF26E',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        flexGrow: 1,
    }
})