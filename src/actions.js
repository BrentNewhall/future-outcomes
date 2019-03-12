import { CREATE_CHAR, SET_CHARS, DELETE_CHAR } from './constants.js';

export function createNewCharacter( name, moves, luckPoints ) {
    console.log( "In createNewCharacter() (action)")
    return {
        type: CREATE_CHAR,
        payload: {
            name,
            moves,
            luckPoints
        }
    }
}

export function setCharacters( allCharacters ) {
    console.log( "In setCharacters() (action)")
    return {
        type: SET_CHARS,
        payload: {
            characters: allCharacters
        }
    }
}

export function deleteCharacter( id ) {
    console.log( "In deleteCharacter() (action)")
    return {
        type: DELETE_CHAR,
        payload: {
            id
        }
    }
}