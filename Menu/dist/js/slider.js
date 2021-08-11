const slider = document.querySelector('.carousel__slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParent = document.querySelector('.control .control__manual')
const indicators = document.querySelectorAll('.control .control__manual-button');
index = 0;

indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        document.querySelector('.control .selected').classList.remove('selected');
        indicator.classList.add('selected');
        slider.style.transform = 'translateX(' + (i) * -25 + '%)';
        index = 1;
    });
});

leftArrow.addEventListener('click', function(){
    index = (index > 0) ? index -1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});

rightArrow.addEventListener('click', function(){
    index = (index < 4 - 1) ? index +1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicatorParent.children[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
});