const button = document.getElementById('aside-button');
const asideBig = document.getElementsByClassName('aside-big');
const asideSmall = document.getElementsByClassName('aside-small');
const main = document.getElementsByTagName('main');
const wrapper = document.getElementsByClassName('wrapper-recomendation__videos');

let isAside = true;


button.onclick = () => {
    if(isAside) {
        asideBig[0].style.display = 'none';
        asideSmall[0].style.display = 'flex';
        main[0].style.paddingLeft = '120px';
        main[0].style.paddingRight = '180px';
        //wrapper[0].style.justifyContent = 'center';
        isAside = false;
    }
    else {
        asideBig[0].style.display = 'flex';
        asideSmall[0].style.display = 'none';
        main[0].style.paddingLeft = '240px';
        main[0].style.paddingRight = '100px';
        isAside = true;
    }

};