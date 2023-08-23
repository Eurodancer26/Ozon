import renderCart from "./renderCart";
import { postData } from "../services/services";

const modal = (btnsSelector, modalSelector, closeSelector, modalContentSelector, modifierSelector) => {
    const btn = document.getElementById(btnsSelector),
          modal = document.querySelector(modalSelector),
          modalTotalPrice = modal.querySelector('.cart-total > span'),
          modalSendBtn = modal.querySelector('.cart-confirm'),
          cartTotalPrice = document.querySelector('#cart .counter'),
          cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
          modalWrap = document.querySelector('.cart-wrapper'),
          goodsWrap = document.querySelector('.goods');
        //   scroll = fixScroll();

    cartTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);

    function openModal()  {
        setTimeout(() => {
            modal.classList.add(modifierSelector);
        },200);
        modal.style.display = 'flex';
        // document.body.style.overflow = 'hidden';
        // document.body.style.marginRight = `${scroll}px`;
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
        if (!isClickOutside) {
            console.log(isClickOutside);
            closeModal();
        }
    }

    function detachModalEvents() {
        modal.querySelector(closeSelector).removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        modal.removeEventListener('click', handleOutside);
    }

    // function fixScroll() {
    //     let div = document.createElement('div');
    //     div.classList.add('fixScroll');
    //     div.style.width = '50px';
    //     div.style.overflow = 'scroll';
    //     div.style.visibility = 'hidden';
    //     document.body.append(div);
    //     let scrollWidth = div.offsetWidth - div.clientWidth;

    //     return scrollWidth;
    // }

    btn.addEventListener('click', openModal);

    goodsWrap.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card'),
                  key = card.dataset.key,
                  goods = JSON.parse(localStorage.getItem('goods')),
                  goodsItem = goods.find((item) => item.id === +key);
            
            cart.push(goodsItem);

            localStorage.setItem('cart', JSON.stringify(cart));
            
        }
    });

    modalWrap.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card'),
            key = card.dataset.key,
            index = cart.findIndex((item) => item.id === +key);

            cart.splice(index, 1);

            console.log(index);

            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart);
            modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
        }
    });

    modalSendBtn.addEventListener('click', () => {
        postData(cart).finally(() => {
            localStorage.removeItem('cart');

            renderCart([]);

            modalTotalPrice.textContent = cart.reduce((acc, goodsItem) => acc + goodsItem.price, 0);
        });
    });
};
export default modal;