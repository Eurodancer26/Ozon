import cards from './modules/cards';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal('#cart', '.cart', '.cart-close', '.cart-body', 'cart-confirm');
    cards();
});
