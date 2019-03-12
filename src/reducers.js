import { CREATE_CHAR, SET_CHARS, DELETE_CHAR } from './constants.js'

const DEFAULT_STATE = {
    characters: [
        {
            name: 'Virgil',
            moves: ['default', 'physical-combat'],
            luckPoints: 0,
        }
    ]
}

export default function charReducer( state = DEFAULT_STATE, action ) {
    console.log( "In charReducer. Payload is ", action.payload );
    switch( action.type ) {
        case CREATE_CHAR:
            return {
                ...state,
                characters: [...state.characters,action.payload]
            };
        case SET_CHARS:
            return {
                ...state,
                characters: action.payload.characters
            }
        case DELETE_CHAR:
            return {
                ...state,
                characters: [
                    ...state.characters.filter( (item, index ) => {
                        return index !== action.payload.id
                    })
                ]
            }
        default:
            return state;
    }
}