const items = document.querySelectorAll('.listItem');
const rate = document.querySelector('.ratingCard');
const thanks = document.querySelector('.thanksCard');
const ratingPoint = document.querySelector('.ratingPoint');
const warning = document.querySelector('.warning');
let point;

function getRatingPoint(e) {
    point = e.innerHTML;

    for (let i = 0; i < items.length; i++) {
        console.log(items[i].innerHTML);
        if (items[i].innerHTML == point) {
            items[i].classList.add('active');
        } else {
            items[i].classList.remove('active');
        }
    }
}

function submitRating() {
    if(point != null) {
        rate.style.display = 'none';
        thanks.style.display = 'block';
        warning.style.display = 'none';
        ratingPoint.innerHTML = point;
    } else {
        warning.style.display = 'block';
    }
    
}