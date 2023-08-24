import renderCart from "./renderCart";
import { postData } from "../services/services";

const modal = (btnsSelector, modalSelector, closeSelector, modalContentSelector, modifierSelector) => {
    const btn = document.getElementById(btnsSelector),
          modal = document.querySelector(modalSelector),
          modalTotalPrice = modal.querySelector('.cart-total > span'),
          TotalPrice = document.querySelector('#cart .counter'),
          cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
          modalSendBtn = modal.querySelector('.cart-confirm'),
          modalWrap = document.querySelector('.cart-wrapper'),
          goodsWrap = document.querySelector('.goods');
    
    function openModal()  {
        setTimeout(() => {
            modal.classList.add(modifierSelector);
        },200);
        modal.style.display = 'flex';
        // document.body.style.overflow = 'hidden';
        // document.body.style.marginRight = `${scroll}px`;
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
        renderCart(cart);
        modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);

        attachModalEvents();
    }
    function closeModal() {
        modal.classList.remove(modifierSelector);
        setTimeout(() => {
            modal.style.display = 'none';
        },200);
        // document.body.style.overflow = '';
        // document.body.style.marginRight = `0px`;
        detachModalEvents();
    }

    function attachModalEvents() {
        modal.querySelector(closeSelector).addEventListener('click', closeModal);
        document.addEventListener('keydown', handleEscape);
        modal.addEventListener('click', handleOutside);
    }

    const handleEscape = e => e.key === 'Escape' ? closeModal() : null;


    function handleOutside(e) {
        const isClickOutside = !!e.target.closest(modalContentSelector);
        console.log(!isClickOutside);
        if (!isClickOutside && !e.target.classList.contains('btn-primary')) {
            closeModal();
            
        }
    }

    function detachModalEvents() {
        modal.querySelector(closeSelector).removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }

    btn.addEventListener('click', openModal);

    TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);

    goodsWrap.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
                  price = localStorage.getItem('price') ? JSON.parse(localStorage.getItem('price')) : [],
                  card = e.target.closest('.card'),
                  key = card.dataset.key,
                  goods = JSON.parse(localStorage.getItem('goods')),
                  goodsItem = goods.find((item) => item.id === +key);
            
            cart.push(goodsItem);
            price.push(goodsItem);

            localStorage.setItem('cart', JSON.stringify(cart));
            TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
        }
    });

    modalWrap.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
                  card = e.target.closest('.card'),
                  key = card.dataset.key,
                  index = cart.findIndex((item) => item.id === +key);

            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart);
            modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
            TotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
        }
    });

    modalSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
              
        postData(cart).finally(() => {
            localStorage.removeItem('cart');
            
            renderCart([]);
            modalTotalPrice.textContent =  0;
            TotalPrice.textContent = 0;

        });
    });
};
export default modal;