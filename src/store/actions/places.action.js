import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes';


export const addPlace = (value, placeImage) => {
    return {
        type: ADD_PLACE,
        value: value,
        placeImage: placeImage
    }
}

export const deletePlace = (key) => {
    return {
        type: DELETE_PLACE,
        key: key
    }
}

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        key: key
    }
}

export const deSelectPlace = () => {
    return {
        type: DESELECT_PLACE
    }
}