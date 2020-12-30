import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';


const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [
                    ...state.places,
                    {
                        key: Math.random().toString(),
                        value: action.value,
                        image: action.placeImage
                    }
                ]
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((p, i) => {
                    return p.key !== action.key;
                }),
                selectedPlace: null
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find((place) => {
                    return place.key === action.key
                })
            }
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            }
        default:
            return state;
    }
}

export default reducer;