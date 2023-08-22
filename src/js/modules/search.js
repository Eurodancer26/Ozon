import {getResource} from '../services/services';
import render from './render';
import {funcFilter} from './filters';
import { debounce } from './helpers';

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input'),
          minInp = document.getElementById('min'),
          maxInp = document.getElementById('max'),
          labelCheckSale = document.querySelector('.filter-check_checkmark'),
          itemCatalog = document.querySelectorAll('.catalog li');

    let _category;      
          
    function checkNumInput(e) {
        if (e.key.match(/[^0-9]/ig)) {
            e.preventDefault();
        }
    }

    const debounceFunc = debounce((min = '', max = '', sale = false, searchInput = '', categoryVal = '') => {
        getResource().then(goods => {
            render(funcFilter(goods, min, max, sale, searchInput, categoryVal));
        });
    }, 800);
    
    function showChecked() {
        if (!labelCheckSale.classList.contains('checked')) {
            labelCheckSale.classList.add('checked');
        } else {
            labelCheckSale.classList.remove('checked');
        }
    }

    itemCatalog.forEach(item => {
        item.addEventListener('click', () => {
            _category = item.textContent;
            console.log(_category);
            getResource().then(goods => {
                debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
            });
        });
    });

    searchInput.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
    });

    labelCheckSale.addEventListener('click', () => {
        showChecked();
        debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category);
    });

    minInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category));
    minInp.addEventListener('keypress', checkNumInput);
    maxInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value, _category));
    maxInp.addEventListener('keypress', checkNumInput);
};

export default search;