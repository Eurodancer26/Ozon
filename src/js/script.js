import load from './modules/load';
import modal from './modules/modal';
import search from './modules/search';
import catalog from './modules/catalog';



window.addEventListener('DOMContentLoaded', () => {
    
    

    modal('#cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
    search();
    load();
    catalog();
});
