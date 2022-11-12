let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let modalButtons = document.querySelectorAll('[data-modal-target]');
let closeModalButtons = document.querySelectorAll('[data-close-button]');
let modalBackground = document.querySelector('.modal-container');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

modalButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = button.closest('.modal-container')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}

window.onclick = function(event) {
    if (event.target == modalBackground) {
        closeModal(modal)
    }
}