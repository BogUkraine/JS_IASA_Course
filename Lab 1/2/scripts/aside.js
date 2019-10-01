const button = document.getElementById('aside-button');
const asideBig = document.getElementsByClassName('wrapper-aside-big');
const asideSmall = document.getElementsByClassName('wrapper-aside-small');
const main = document.getElementsByClassName('wrapper');
const wrapper = document.getElementsByClassName('wrapper-recomendation__videos');

let isAside = true;


button.onclick = () => {
    if(isAside) {
        asideBig[0].style.display = 'none';
        asideSmall[0].style.display = 'flex';
        main[0].style.paddingLeft = '80px';
        isAside = false;
    }
    else {
        asideBig[0].style.display = 'flex';
        asideSmall[0].style.display = 'none';
        main[0].style.paddingLeft = '0';
        isAside = true;
    }

};