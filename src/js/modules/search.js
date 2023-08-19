import {getResource} from '../services/services';
import render from './render';
import {funcFilter} from './filters';
import { debounce } from './helpers';

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input'),
          minInp = document.getElementById('min'),
          maxInp = document.getElementById('max'),
          labelCheckSale = document.querySelector('.filter-check_checkmark');
    
    function checkNumInput(e) {
        if (e.key.match(/[^0-9]/ig)) {
            e.preventDefault();
        }
    }

    const debounceFunc = debounce((min = '', max = '', sale = false, searchInput = '') => {
        getResource().then(goods => {
            render(funcFilter(goods, min, max, sale, searchInput));
        });
    }, 800);
    
    function showChecked() {
        if (!labelCheckSale.classList.contains('checked')) {
            labelCheckSale.classList.add('checked');
        } else {
            labelCheckSale.classList.remove('checked');
        }
    }

    searchInput.addEventListener('input', () => {
        debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value);
    });

    labelCheckSale.addEventListener('click', () => {
        showChecked();
        debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value);
    });

    minInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value));
    minInp.addEventListener('keypress', checkNumInput);
    maxInp.addEventListener('input', () => debounceFunc(minInp.value, maxInp.value, labelCheckSale.classList.contains('checked'), searchInput.value));
    maxInp.addEventListener('keypress', checkNumInput);
    console.log(checkInp.checked, labelCheckSale.classList.contains('checked'));
};

export default search;