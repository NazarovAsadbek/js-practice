import $ from '../core';

$.prototype.modal = function () {
    for (let i = 0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click((e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });
    }

    const closeElements = document.querySelectorAll('[data-close]');
    closeElements.forEach((elenm) => {
        $(elenm).click(() => {
            $('.modal').fadeOut(500);
            document.body.style.overflow = 'hidden';
        })
    })

    $('.modal').click((e) => {
        if (e.target.classList.contains('modal')) {
            $('.modal').fadeOut(500);
            document.body.style.overflow = 'hidden';
        }
    })
};

$('[data-toggle="modal"]').modal();
