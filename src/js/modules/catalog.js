const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');

    let isOpen; 

    function openCatalog() {
        document.querySelector('.catalog').style.display = 'block';
        attachCatalogEvents();
    }

    function closeCatalog() {
        document.querySelector('.catalog').style.display = '';
        detachCatalogEvents();
    }

    function attachCatalogEvents() {
        btnCatalog.addEventListener('click', closeCatalog);
        btnCatalog.addEventListener('click', handleBtnCatalog);
        document.querySelector('.catalog').addEventListener('click', handleCatalog);
    }

    
    function handleBtnCatalog() {
        if (!isOpen) {
            closeCatalog();
        }
    }

    function handleCatalog(e) {
        const isClick = !!e.target.closest('.catalog-list');
        if (isClick) {
            closeCatalog();
        }
    }

    function detachCatalogEvents() {
        btnCatalog.removeEventListener('click', closeCatalog);
        btnCatalog.removeEventListener('click', handleBtnCatalog);
        document.querySelector('.catalog').removeEventListener('click', handleCatalog);
    }

    btnCatalog.addEventListener('click', openCatalog);
};

export default catalog;