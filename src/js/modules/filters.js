function funcFilter (goods, minVal, maxVal, checkSale, searchVal, categoryVal) {
    return goods.filter((goodsItem) => {
        const isMin = minVal ? goodsItem.price >= minVal : true,
              isMax = maxVal ? goodsItem.price <= maxVal : true,
              isSale = checkSale ? goodsItem.sale : true,
              isCategory = categoryVal ? goodsItem.category.includes(categoryVal) : true,
              isTitle = searchVal ? goodsItem.title.toLowerCase().includes(searchVal.toLowerCase()) : true;
        return isMin && isMax && isSale && isTitle && isCategory;
    });
    
};

export {funcFilter};