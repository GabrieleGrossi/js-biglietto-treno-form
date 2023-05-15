const userKm = parseInt(document.getElementById('user-km'));
console.log(id='user-km');

const userAge = parseInt(document.getElementById('user-age'));
console.log(id='user-age');

const button = document.querySelector('button.button')

const ticketPrice = 0.233

if (userAge < 18){
    discountPrice = totalPrice - (totalPrice * 0.194);
    console.log('Essendo ancora minorenne, hai diritto ad uno sconto del 19,4% usl prezzo del biglietto')
    console.log(discountPrice)
    document.getElementById("discount").innerHTML = discountPrice.toFixed(2);
} else if (userAge > 65){
    discountPrice = totalPrice - (totalPrice * 0.377);
    console.log('Essendo over 65, hai diritto ad uno sconto del 37,7% sul prezzo del biglietto')
    console.log(discountPrice)
    document.getElementById("discount").innerHTML = discountPrice.toFixed(2)
}