const categoryFilter = (goods, val) => {
    return goods.filter(goodsItem => goodsItem.category.includes(val));
};

function funcFilter (goods, minVal, maxVal, checkSale, searchVal) {
    return goods.filter((goodsItem) => {
        const isMin = minVal ? goodsItem.price >= minVal : true,
              isMax = maxVal ? goodsItem.price <= maxVal : true,
              isSale = checkSale ? goodsItem.sale : true;
              console.log(isSale);
        return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    
};

export {categoryFilter, funcFilter};