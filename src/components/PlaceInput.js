import React, {useState} from 'react';
import { View, Button, TextInput,StyleSheet } from 'react-native';

export default function PlaceInput(props) {
    const [value, setValue] = useState('');

    onValueChange = (val) => {
        setValue(val);
    }

    onPlaceAdd = () => {
        props.onPlaceAdd(value);
        setValue('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                onChangeText={onValueChange}
                value={value}
                placeholder="An awesome place..."
            />
            <Button
                title="ADD"
                onPress={onPlaceAdd}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    placeInput: {
        width: "70%",
        borderWidth: 1,
        borderColor: "gray"
    }
});