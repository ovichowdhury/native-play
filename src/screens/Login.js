import React from 'react';
import { Button, Text } from 'react-native';

function Login(props) {

    onSignIn = () => {
        props.navigation.navigate('Dashboard');
    }

    return (
        <>
            <Text>Login Screen</Text>
            <Button title="Sign In" onPress={onSignIn}/>
        </>
    )
}


export default Login

