let fruits = ['apple','banana','berry'];
fruits.forEach(i => {
    console.log('My favourite fruit is : ');
    console.log(i);
});

// output : My favourite fruit is : apple
// output : My favourite fruit is : banana
// output : My favourite fruit is : berry

//----------------------------------------------- si

setInterval(function() {
    console.log('Hey');
}, 1);  // it will say Hey every 1 second


// we want a div to reach 100 px from 0 px with animation 
let div = document.getElementById('div');
div.width = '0px';
let width = 0
let mar = setInterval(function() {
    if(width == 100){
        clearInterval(mar)
    }
    else{
        width += 1
        div.width = width + 'px'
    }
}, 1);


// --------------------------------------  we want js to alert Hello How are your when we scroll to 1500px top

window.addEventListener('scroll',function () {
    // every time we scroll it will do this function
    // then we to get the number of scroll top
    let sc = this.document.documentElement.scrollTop;
    if (sc >= 1500) {
        alert('Hello ! How are You ? ')
    }
})

// if you want to make just one time only !
let once = 0
window.addEventListener('scroll',function () {
    // every time we scroll it will do this function
    // then we to get the number of scroll top
    if(once == 0){ // true 
        let sc = this.document.documentElement.scrollTop;
        if (sc >= 1500) {
            alert('Hello ! How are You ? ');
            once =1 ;
        }
        // so once will be equal to zero just one time
    }
})

//------------------------------------------------------ javasript html functions ! 

let div = document.getElementById('div');
div.onclick = function () { alert('You Clicked Me'); }
div.onmouseover = function () { alert('You Hovered Me !'); }
div.onmouseleave = function() { alert('You leaved Me !'); }

//----------------------------------------------------if you want to make something to be done only one time (the function that is supposed to be done once)

// in this tutorial we want to say Welcome just one time

let numbers = 0;
setInterval(function() {
    if(numbers == 0){
        alert('Welcome');
        numbers = 1
    }
}, 1);

// the output will be Welcome just one time cause numbers was 0 just one time

// Enjoy ! 





