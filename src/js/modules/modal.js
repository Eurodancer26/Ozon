const modal = (btnsSelector, modalSelector, closeSelector, modalContentSelector, modifierSelector) => {
    const btn = document.querySelector(btnsSelector),
          modal = document.querySelector(modalSelector);
        //   scroll = fixScroll();

    function openModal()  {
        setTimeout(() => {
            modal.classList.add(modifierSelector);
        },200);
        modal.style.display = 'flex';
        // document.body.style.overflow = 'hidden';
        // document.body.style.marginRight = `${scroll}px`;
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
};
export default modal;