import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { AddInput } from './components/AddInput';
import { TodoList } from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const countTasks = status => todos.filter(item => item.status === status).length;

  const [filter, setFilter] = useState(todos);
  const [status, setStatus] = useState('all');
  const [countComplete, setCountComplete] = useState(countTasks(true));
  const [countNotComplete, setCountNotComplete] = useState(countTasks(false));

  useEffect(() => {
    setFilter(status === 'all' ? todos : todos.filter((todo) => todo.status === status));
    setCountComplete(countTasks(true));
    setCountNotComplete(countTasks(false));
  }, [status, todos]);

  const addTodo = (text) => {
    setTodos(todo => [...todo, {id: Date.now().toString(), text: text, status: false}]);
  };

  const deleteTodo = (id) => {
    setTodos(todo => todo.filter(item => item.id !== id));
  };

  const statusTodo = (id) => {
    let todo = [...todos].filter(item => {
      if (item.id == id) {item.status = !item.status}
      return item
    });
    setTodos(todo);
  };
  
  return ( 
    <View style={styles.container}>
      <View>
        <StatusBar />
      </View>
      <View style={styles.head}>
        <Text style={styles.header}>ToDoList</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity 
                onPress={() => {
                    setStatus('all')
                }}
                style={styles.choiceBtn}
                activeOpacity={0.7}
            >
                <Text>Все</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  setStatus(true)
                }}
                style={styles.choiceBtn}
                activeOpacity={0.7}
            >
                <Text style={{color:'#1DF26E'}}>✔ {countComplete}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  setStatus(false)
                }}
                style={styles.choiceBtn}
                activeOpacity={0.7}
            >
                <Text style={{color:'#F24A41'}}>✘ {countNotComplete}</Text>
            </TouchableOpacity>
        </View>
      </View>
      <FlatList 
        data={filter}
        renderItem={({item}) => (<TodoList item={item} deleteTodo={deleteTodo} statusTodo={statusTodo}/>)}
        keyExtractor={(item) => item.id}
        style={{width: '100%'}}
      />
      <AddInput addTodo={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#19196f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  },

  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    height: 40,
    width: '100%',
    marginBottom: 5,
  },

  header: {
    fontSize: 20,
    color: 'white',
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },

  choiceBtn: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    minWidth: 40,
    paddingHorizontal: 5
  }
  
});
