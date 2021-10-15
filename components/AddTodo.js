import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {

    const [enteredText, setEnteredText] = useState('');

    const changeHandler = (value) => {
        setEnteredText(value);
    }

    return(
        <View>
            <TextInput
                style={styles.input} 
                placeholder='new todo...'
                onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(enteredText)} title='Add Todo' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD'
    }
});