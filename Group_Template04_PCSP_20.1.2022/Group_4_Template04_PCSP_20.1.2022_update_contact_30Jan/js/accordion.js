// ACCORDION JS
$(document).ready(function () {
    const accordion_items_elms = document.querySelectorAll('.accordion .accordion-item');

    accordion_items_elms.forEach(accordionItem => {

        accordionItem.querySelector('.accordion-item-head').addEventListener('click', (e) => {
            accordionItem.classList.toggle('open');
        });

    });
});