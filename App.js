/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';


import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceImage from './src/assets/place.jpg';

const App = () => {
    
    const [places, setPlaces] = useState([]);

    onPlaceAdd = (value) => {
        if(value.trim() === "") return;
        setPlaces([...places, {key: Math.random().toString(), value: value, image: PlaceImage}]);
    }

    deletePlace = (key) => {
        setPlaces(places.filter((p, i) => {
            return p.key !== key;
        }));
    }

    

    return (
        <>
            <View style={styles.container}>
                <PlaceInput onPlaceAdd={onPlaceAdd}/>
                {/* Place List */}
                <PlaceList places={places} onItemPress={deletePlace}/>        

            </View>
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }
});



export default App;
