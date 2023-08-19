const debounce = (func, ms = 500) => {
    let timerId;

    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(this, args);
        }, ms);
    };
};

export {debounce};