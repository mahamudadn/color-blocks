console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);
// Crreated on ready file  
function onReady(){
    console.log('We have JQuery in the home')

// craeted an onclick that will add up.

    $('#red-btn').on('click', appendred)
    $('#blue-btn').on('click', appendBlue)
    $('#green-btn').on('click', appendgreen)
    $('#yellow-btn').on('click', appendyellow)

// created an onclick function that will redmove what is clicked.

    $('#blocks').on('click','.block', removeRed)
    $('#blocks').on('click','.block', removeBlue)
    $('#blocks').on('click','.block', removeGreen)
    $('#blocks').on('click','.block', removeYellow)

}
// Defined counting values and gave them a valu of 1.
    let redCount = 1 ;
    let blueCount = 1 ; 
    let greenCount = 1 ;
    let yellowCount = 1 ; 


function appendred() {
    $('#blocks').append('<div class="block red-fill"></div>')
    redCount ++;// adds 1 more to the value of redCount

    // told JQeury to call redCount id and look it html.
    $('#red-count').html(redCount) 
}

function appendBlue(){
    $('#blocks').append('<div class="block blue-fill"></div>')
    blueCount ++; //adds 1 more to the value of blueCount
    $('#blue-count').html(blueCount)
}

function appendgreen() {
    $('#blocks').append('<div class="block green-fill"></div>')
    greenCount ++;
    $('#green-count').html(greenCount)
}

function appendyellow() {
    $('#blocks').append('<div class="block yellow-fill"></div>')
    yellowCount ++; //adds 1 more to the value of yellowCount
    $('#yellow-count').html(yellowCount)
}
// Removes Red color when you click on it in DOM.
//tried to decrement the number count but partialy working

function removeRed(){
   
    $(this).remove()
    if(redCount > 0 ){
        redCount --;
       
    } 
    $('#red-count').html(redCount)  
}
// Removes Blue color when you click on it in DOM.
//tried to decrement the number count but partialy working
function removeBlue(){
    $(this).remove()
    if(blueCount > 0 ){
        blueCount --;
       
    } 
    $('#blue-count').html(blueCount) 
}
//Removes Green color when you click on it in DOM.
//tried to decrement the number count but partialy working
function removeGreen(){
    $(this).remove()
    if(greenCount > 0 ){
        greenCount --;
       
    } 
    $('#green-count').html(greenCount)
}
// Removes yellow color when you click on it in DOM.
//tried to decrement the number count but partialy working
function removeYellow(){
    $(this).remove()
    if(yellowCount > 0 ){
        yellowCount --;
 
    } 
   $('#yellow-count').html(yellowCount)   
}