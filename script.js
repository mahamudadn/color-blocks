console.log('🟥 🟦 🟩 🟨');
$(document).ready(onReady);
// greated 
function onReady(){
    console.log('We have JQuery in the home')

    $('#red-btn').on('click', appendred)
    $('#blue-btn').on('click', appendBlue)
    $('#green-btn').on('click', appendgreen)
    $('#yellow-btn').on('click', appendyellow)
    $('#blocks').on('click','.block', removeRed)
    $('#blocks').on('click','.block', removeBlue)
    $('#blocks').on('click','.block', removeGreen)
    $('#blocks').on('click','.block', removeYellow)

    




}

let redCount = 1 ;
let blueCount = 1 ; 
let greenCount = 1 ;
let yellowCount = 1 ; 


function appendred() {
    $('#blocks').append('<div class="block red-fill"></div>')
    redCount ++;
    $('#red-count').html(redCount)
}

function appendBlue(){
    $('#blocks').append('<div class="block blue-fill"></div>')
    blueCount ++;
    $('#blue-count').html(blueCount)
}

function appendgreen() {
    $('#blocks').append('<div class="block green-fill"></div>')
    greenCount ++;
    $('#green-count').html(greenCount)
}

function appendyellow() {
    $('#blocks').append('<div class="block yellow-fill"></div>')
    yellowCount ++;
    $('#yellow-count').html(yellowCount)
}

function removeRed(){
    $(this).remove()
    
}

function removeBlue(){
    $(this).remove()
    
}

function removeGreen(){
    $(this).remove()
}

function removeYellow(){
    $(this).remove()
}