const searchFilter = (goods, value) => {
    
    return goods.filter(goodsItem => goodsItem.title.toLowerCase().includes(value.toLowerCase()));
};

const categoryFilter = (goods, value) => {
    
    return goods.filter(goodsItem => goodsItem.category.includes(value));
};

export {searchFilter, categoryFilter};