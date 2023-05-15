const button = document.querySelector('button')
const answer = document.querySelector ('h2')

button.addEventListener('click',
    function(){
        const userKm = parseInt(document.getElementById ('userKm').value)
        const userAge = parseInt(document.getElementById ('userAge').value)

        const ticketBase = 0.233
        const priceTicket = userKm * ticketBase
        const priceUnder = (1- 0.194) * priceTicket
        const priceOver = (1-0.377) * priceTicket


    if (userAge <= 17) {
        console.log(" Ciao, ho visto che hai meno di 18 anni e devi percorrere " + userKm + " km, il tuo biglietto costa " + priceUnder.toFixed(2) + "€. E' stato applicato al prezzo totale uno sconto del 19.4%")
         answer.innerHTML = " Ciao, ho visto che hai meno di 18 anni e devi percorrere " + userKm + " km, il tuo biglietto costa " + priceUnder.toFixed(2) + "€. E' stato applicato al prezzo totale uno sconto del 19.4%"                
    } else if (userAge >=65) {
        console.log(" Ciao, ho visto che hai più di 65 anni e devi percorrere " + userKm + "km, il tuo biglietto costa " + priceOver.toFixed(2) + "€. E' stato applicato al prezzo totale uno sconto del 37.7%")
        answer.innerHTML = " Ciao, ho visto che hai più di 65 anni e devi percorrere " + userKm + "km, il tuo biglietto costa " + priceOver.toFixed(2) + "€. E' stato applicato al prezzo totale uno sconto del 37.7%" 
    } else {
        console.log(" Ciao, ho visto che hai" + userAge + "anni e devi percorrere " + userKm + "km. Il prezzo del biglietto è di " + priceTicket.toFixed(2) + "€. Non è stato possibile applicare sconti per l'età.")
        answer.innerHTML = " Ciao, ho visto che hai" + userAge + "anni e devi percorrere " + userKm + "km. Il prezzo del biglietto è di " + priceTicket.toFixed(2) + "€. Non è stato possibile applicare sconti per l'età."
    }
    }
)