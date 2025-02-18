let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

//config param
let countItem = items.length;
let itemActive = 0;

//auto run
let refreshInterval = setInterval(()=>{
    next.click();
}, 10000)

//event next click
next.onclick = function(){
    itemActive = itemActive +1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

//event prev click
prev.onclick = function(){
    itemActive = itemActive -1;
    if(itemActive < 0){
        itemActive = countItem -1;
    }
    showSlider();
}

function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new Item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    //clear auto time run slider
    clearInterval(refreshInterval);
    //auto run
    refreshInterval = setInterval(()=>{
        next.click();
    }, 5000)
}

//click thumbnail
thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        clearInterval(refreshInterval); // clear the interval
        showSlider();
    })
})