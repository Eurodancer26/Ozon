
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data          
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