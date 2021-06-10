let firstEgal = document.getElementsByTagName("button")[0];
console.log(firstEgal);

let firstInput = document.getElementsByTagName("input")[0];
console.log(firstInput);

let secondInput = document.getElementsByTagName("input")[1];
console.log(secondInput);

let firstResultPlace = document.getElementsByTagName("span")[1];
console.log(firstResultPlace);

let firstResult;

firstEgal.addEventListener("click", () =>{
firstResult = parseInt(firstInput.value) + parseInt(secondInput.value);
firstResultPlace.innerText = firstResult;


});


