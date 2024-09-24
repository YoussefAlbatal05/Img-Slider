
const sliderParent = document.querySelector(".img-slider-parent")
const slider = document.querySelector(".sliderImgs")
const sliderImgs = document.querySelectorAll(".sliderImgs img")
const backwardBtn = document.querySelector(".backward-btn")
const forwardBtn = document.querySelector(".forward-btn")

let counter = 0
const totalImgs = sliderImgs.length;
let autoSlideInterval;




const nextSlide = () => {
       counter++; // it will increment and goes to another img 
     if(counter >= totalImgs ) { // counter here refers to the img we want to show , counter will start from 0 cuz its index ( 0,1,2 ) , totalImgs refers to the number of images we got it will start from 1 cuz its length ( 1,2,3 ) , the condition is that if the counter is equal or greater than the totalImgs (means you are at the last img of the slide) it will reset to 0 (counter = 0 display the first img) , else it will increment and display the next img by slider.style.transform = "translateX(" + (-counter * (100 / totalImgs)) + "%)";
        counter = 0 ;
     } 
     slider.style.transform = "translateX(" + (-counter * (100 / totalImgs)) + "%)"; // here we will get the slider and then get the counter which refers to the img we are on and multiply it with -100 and add % to move it to the left and get the next img , counter=1 so -1x100% / 3 = 33.3% which is the width of the img so it will move the whole first img and get the second , counter=2 so -2x100% / 3 = -66.6% so it will translateX to the left and get the third img , counter = 3 here the counter = totalImgs so it will reset to the first img cuz the counter contain only three imgs ( 0,1,2 ) 
     
}




const prevSlide = () => {
    counter--;
    if( counter < 0 ) { // if counter equal zero (at the first img) then we will write counter = totalImgs which will take us to the third image cuz totalImgs here refers to third img as its the last one in order so now its like counter = 3 so we will need to decrement it cuz the last img in index is 2
        counter = totalImgs - 1; 
    }    
     slider.style.transform = "translateX(" + (-counter * (100 / totalImgs)) + "%)";
}





const autoSwitch = () => {
    autoSlideInterval = setInterval( nextSlide , 3000 ) // here we will run nextSlide function every 3 seconds
}


const stopAutoSwitching = () => {
    clearInterval(autoSlideInterval)
}





forwardBtn.addEventListener( "click" , (event) => {
    event.preventDefault();
    nextSlide();
    stopAutoSwitching();
})

backwardBtn.addEventListener( "click" , (event) => {
    event.preventDefault();
    prevSlide();
    stopAutoSwitching();
})





sliderParent.addEventListener( "mouseover" , stopAutoSwitching ) // here when you hover on the sliderParent it will stop the auto switching
sliderParent.addEventListener( "mouseleave" , autoSwitch ) // when you stop hovering on the sliderParent the auto switching will start again


autoSwitch(); // render the auto switch 
