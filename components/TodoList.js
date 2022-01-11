import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const TodoList = ({item, deleteTodo, statusTodo}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onLongPress={() => {
                    statusTodo(item.id)
                    console.log(item.id, item.status);
                }}
                style={styles.itemContainer}
                activeOpacity={0.7}
            >
                {
                    item.status ? <View style={styles.checkboxG}></View> : 
                    <View style={styles.checkboxW}></View>
                }
                <View style={styles.textContent}>
                    <Text >
                        {item.text}
                    </Text>
                </View>
                <TouchableOpacity 
                    onPress={() => deleteTodo(item.id)} 
                    style={styles.deleteBtn}
                >
                    <Text>Удалить</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        width: 'auto',
        justifyContent: 'center',
    },

    itemContainer: {
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 50,
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5,

    },

    checkboxG: {
        borderStyle: 'solid',
        borderColor: '#19196f',
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1DF26E'
    },

    checkboxW: {
        borderStyle: 'solid',
        borderColor: '#19196f',
        borderWidth: 2,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },

    textContent: {
        flexShrink: 1,
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    
    deleteBtn: {
        backgroundColor: '#F24A41',
        minHeight: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        
    }
});