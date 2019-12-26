const sizesWidth = document.getElementById('width');
const sizesHeight = document.getElementById('height');
const border = document.getElementById('border');
const borderColor = document.getElementById('border-color');
const altText = document.getElementById('alt-text');
const button = document.getElementById('submit');
const image = document.getElementById('image');

const arr = [sizesWidth, sizesHeight, border, borderColor, altText];

button.addEventListener('click', ()=> {
    let isChecker = true;
    
    for (let item of arr) {
        if(!item.checkValidity() || item.value === '') {
            item.style.border = '2px solid red';
            isChecker = false;
        }
        else {
            item.style.border = '2px solid green';
        }
    }

    if(isChecker) {
        image.style.width = sizesWidth.value + 'px';
        image.style.height = sizesHeight.value + 'px';
        image.style.border = border.value + 'px' + ' solid ' + borderColor.value;
        image.setAttribute('alt', altText);
    }
});