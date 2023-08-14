import {getResource} from '../services/services';
import render from './render';
import {categoryFilter} from './filters';

const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button'),
          itemCatalog = document.querySelectorAll('.catalog li');

    console.log();

    let isOpen; 

    function openCatalog() {
        document.querySelector('.catalog').style.display = 'block';
        attachCatalogEvents();
    }

    function closeCatalog() {
        document.querySelector('.catalog').style.display = '';
        detachCatalogEvents();
    }

    function attachCatalogEvents() {
        btnCatalog.addEventListener('click', closeCatalog);
        btnCatalog.addEventListener('click', handleBtnCatalog);
        document.querySelector('.catalog').addEventListener('click', handleOutside);
    }

    
    function handleBtnCatalog() {
        if (!isOpen) {
            closeCatalog();
        }
    }

    function handleOutside(e) {
        const isClickOutside = !!e.target.closest('catalog');
        if (!isClickOutside) {
            closeCatalog();
        }
    }

    function detachCatalogEvents() {
        btnCatalog.removeEventListener('click', closeCatalog);
        btnCatalog.removeEventListener('click', handleBtnCatalog);
        document.querySelector('.catalog').removeEventListener('click', handleOutside);
    }

    btnCatalog.addEventListener('click', openCatalog);

    itemCatalog.forEach(item => {
        item.addEventListener('click', () => {
            const text = item.textContent;
            getResource().then(goods => {
                render(categoryFilter(goods, text));
            });
        });
    });

};

export default catalog;