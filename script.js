const userKm = parseInt(document.getElementById('userKm'));
console.log(id='userKm');

const userAge = parseInt(document.getElementById('userAge'));
console.log(id='userAge');

const ticketPrice = 0.233;

const totalPrice = userKm * ticketPrice
console.log(totalPrice);

let discountPrice;

const button = document.querySelector('button.button');

button.addEventListener('click', function() {
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
})

