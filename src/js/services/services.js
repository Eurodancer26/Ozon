
const postData = async (cart) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(cart)          
    });

    return await res.json();
};

const getResource = async (value) => {
    try {
        const res = await fetch(`https://test-4abc2-default-rtdb.firebaseio.com/goods.json?${value ? `search=${value}` : ''}`);
        

        return await res.json();
    } catch (error) {
        console.error(error.message);
    }
};

export {postData, getResource};