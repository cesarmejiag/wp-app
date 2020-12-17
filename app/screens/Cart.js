import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Cart() {
    const getItems = async () => {
        /* try {
            const items = await AsyncStorage.getItem('product');
            console.log(items);
        } catch(error) {
            console.log(error);
        } */

        console.log('sending');

        // Create user
        /* var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": "César Mejía",
            "email": "cesar1@pagelab.io",
            "password": "cesar",
            "c_password": "cesar",
            "token_name": Date.now()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://floating-lake-44715.herokuapp.com/api/v1/register", requestOptions)
            .then(response => response.json())
            .then(json => { console.log(json); console.log('hola!') })
            .catch(error => console.log('error', error)); */

        // Login
        /* var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": "cesar1@pagelab.io",
            "password": "cesar",
            "token_name": Date.now()
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://floating-lake-44715.herokuapp.com/api/v1/login", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error)); */
    
        // Get user
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 5|IlT85M7KwdQBFwfZ0Tg01QiU9EsCOweB6tBLOwnd")

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://floating-lake-44715.herokuapp.com/api/v1/users/3", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <View>
            <Text>Cart</Text>
            <Button
                title='Traer Valor'
                onPress={getItems}
            />
        </View>
    );
}

export default Cart;