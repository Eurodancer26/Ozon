import {getResource} from '../services/services';
import render from './render';
import {searchFilter} from './filters';

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input');
    
    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;

        getResource().then(goods => {
            render(searchFilter(goods, value));
        });
        
    });
    
    
};

export default search;