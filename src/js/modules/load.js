import {postData} from '../services/services';
import {getResource} from '../services/services';
import render from './render';

const load = (url) => {
    getResource(url).then(goods => {
        render(goods);
    });
};

export default load;