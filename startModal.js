document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('default-modal');
    modal.classList.remove('hidden');

    const hideModalButtons = document.querySelectorAll('[data-modal-hide="default-modal"]');
    hideModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    });
});