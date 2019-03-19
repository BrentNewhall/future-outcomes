import { CREATE_CHAR, SET_CHARS, DELETE_CHAR } from './constants.js'

const DEFAULT_STATE = {
    characters: [
        {
            name: 'Virgil',
            moves: ['default', 'physical-combat', 'negotiation'],
            luckPoints: 0,
            conditions: [],
        }
    ]
}

export default function charReducer( state = DEFAULT_STATE, action ) {
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