const names = ["Lisa", "Kaitlin", "Jan"]; 
//const eventName = "surprise"

    function writeCards(names, event) {
        let card = [];
        event = "surprise";
        for (let i = 0; i < names.length; i++){
            card[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return card;
}

let number = 10;
function countDown (number) {
    while (number >= 0) {
        console.log(number--);
    }
}

