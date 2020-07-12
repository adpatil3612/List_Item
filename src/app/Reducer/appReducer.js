import { createStore } from 'redux';
import { ActionConstants } from '../Constants/ActionConstants';
const uuid = require('uuid');


const defaultState = {
    data: [{
        id: uuid(),
        description: "Hello World",
        like: 9,
        dislike: 2
    }]
}


const configureStore = createStore((state = defaultState, action) => {
    switch(action.type){
        case ActionConstants.ADD_DATA: {
            if(action.value){
                const newObj = { id: uuid(), description: action.value, like: 0 , dislike: 0 }
                const currentData = [...state.data];
                currentData.push(newObj);
                return {...state, data: currentData}
            }
            return state;
        }
        case ActionConstants.UPDATE_LIKE_COUNT:{
            if(action.value){
                const currentData = { ...state };
                let Data = currentData.data.map( item => {
                    if(item.id == action.value){
                        item.like+=1
                    }
                    return item;
                })
            return {...state, data: Data}
            }
            return state;
        }
        case ActionConstants.UPDATE_DISLIKE_COUNT: {
            let currentData = [...state.data];
            currentData = currentData.map( item => {
                if(item.id == action.value){
                    item.dislike+=1
                }
                return item;
            })
            return {...state, data: currentData}
        }
        default: return state;
    }
})

export default configureStore;