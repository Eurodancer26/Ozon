import {getResource} from '../services/services';


function cards() {
    getResource('https://test-4abc2-default-rtdb.firebaseio.com/goods.json')
        .then(data => console.log(data));

}



export default cards;