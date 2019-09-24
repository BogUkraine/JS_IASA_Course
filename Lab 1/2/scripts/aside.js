const button = document.getElementById('aside-button');
const asideBig = document.getElementsByClassName('aside-big');
const asideSmall = document.getElementsByClassName('aside-small');
const main = document.getElementsByTagName('main');

let isAside = true;


button.onclick = function() {
    if(isAside) {
        asideBig[0].style.display = 'none';
        main[0].style.left = '80px';
        main[0].style.width = '100%';
        asideSmall[0].style.display = 'flex';
        isAside = false;
    }
    else {
        asideBig[0].style.display = 'flex';
        main[0].style.left = '240px';
        main[0].style.width = '90%';
        asideSmall[0].style.display = 'none';
        isAside = true;
    }

};