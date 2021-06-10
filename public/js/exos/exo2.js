let secondEgal = document.getElementsByTagName("button")[1];
console.log(secondEgal);

let thirdInput = document.getElementsByTagName("input")[2];
console.log(thirdInput);

let fourthInput = document.getElementsByTagName("input")[3];
console.log(fourthInput);

let secondResultPlace = document.getElementsByTagName("span")[2];
console.log(secondResultPlace);


let chooseOpBtn = document.getElementsByTagName("select")[0];
console.log(chooseOpBtn);



let secondResult;

secondEgal.addEventListener("click", () =>{

if(chooseOpBtn.value == "+"){
  
secondResult = parseInt(thirdInput.value) + parseInt(fourthInput.value);
secondResultPlace.innerText = secondResult;  

}else if(chooseOpBtn.value == "-"){
     secondResult = parseInt(thirdInput.value) - parseInt(fourthInput.value);
     secondResultPlace.innerText = secondResult; 
}else if(chooseOpBtn.value == "*"){
     secondResult = parseInt(thirdInput.value) * parseInt(fourthInput.value);
     secondResultPlace.innerText = secondResult; 
}else {
     secondResult = parseInt(thirdInput.value) / parseInt(fourthInput.value);
     secondResultPlace.innerText = secondResult; 
}


});

