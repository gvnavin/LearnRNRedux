import {
    GET_ALBUMS
} from './types';
import axios  from 'axios';

export const getData = () => {
    
    return (dispatch) => {
        
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
             .then(response => {
                     const albums = response.data;
                     dispatch({
                         type: GET_ALBUMS,
                         payload: albums
                     })
                 }
             );
    }
};