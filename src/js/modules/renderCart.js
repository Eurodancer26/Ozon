const renderCart = (goods) => {
    
    const cartWrap = document.querySelector('.cart-wrapper');

    cartWrap.innerHTML = '';

    if (goods.length === 0) {
        cartWrap.insertAdjacentHTML('beforeend', `
            <div id="cart-empty">
                Ваша корзина пока пуста
            </div>
        `);
    } else {
        goods.forEach(item => {       
            cartWrap.insertAdjacentHTML('beforeend', `
                <div class="card" data-key="${item.id}">
                    ${item.sale === true ? `<div class="card-sale">🔥Hot Sale🔥</div>` : ''}
                    <div class="card-img-wrapper">
                        <span class="card-img-top"
                            style="background-image: url('${item.img}')"></span>
                    </div>
                    <div class="card-body justify-content-between">
                        <div class="card-price">${item.price}</div>
                        <h5 class="card-title">${item.title}</h5>
                        <button class="btn btn-primary">удалить</button>
                    </div>
                </div>
            `);
        });
    }
     

};



// https://test-4abc2-default-rtdb.firebaseio.com/goods.json

export default renderCart;