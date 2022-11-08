//1. querySelectorAll

let dinoList1 = document.querySelectorAll("ol li");
let addStrike = 

dinoList1.forEach(dinoList1 => {
    dinoList1.addEventListener("click", function(){
        dinoList1.style.textDecoration = "line-through";
    })
});

let dinoList2 = document.querySelectorAll("ul li")

dinoList2.forEach(dinoList2 => {
    dinoList2.addEventListener("click", function(){

        dinoList2.style.opacity = .5;
    })
});

let pictures = document.querySelectorAll("#row img")

pictures.forEach(pictures => {
    pictures.addEventListener("click", function(){

        pictures.style.width = "0px";
    })
});


let meteor = document.querySelector('#destroy-all');


meteor.addEventListener('click',function(){

    for(let i = 0; i<dinoList1.length; i++){
        dinoList1[i].style.textDecoration = "line-through";
    }

    for(let i = 0; i<dinoList2.length; i++){
        dinoList2[i].style.opacity = "0";
    }
  
    for(let i = 0; i < pictures.length; i++){
        pictures[i].style.width ='0px';
    }
})

