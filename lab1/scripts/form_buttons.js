const buttonOpenForm = document.getElementById('aside-button-form');
const buttonCloseForm = document.getElementById('button-form-close');
const form = document.getElementById('hot-form');

buttonOpenForm.onclick = function() {
    form.style.display = 'flex';
};

buttonCloseForm.onclick = function() {
    form.style.display = 'none';
};