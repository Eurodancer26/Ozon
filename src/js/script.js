import load from './modules/load';
import modal from './modules/modal';
import search from './modules/search';
import catalog from './modules/catalog';
import filter from './modules/filter';



window.addEventListener('DOMContentLoaded', () => {
    
    

    modal('cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
    search();
    load();
    catalog();
    filter();
});
